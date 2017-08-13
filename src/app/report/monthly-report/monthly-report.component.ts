import { Component, OnInit } from '@angular/core';
import { DateModel, DatePickerOptions } from 'ng2-datepicker';
import { OrderService } from '../../main/order.service';
import { RoomService } from '../../main/room.service';
@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.css']
})
export class MonthlyReportComponent implements OnInit {
  fromDate: DateModel = new DateModel();
  toDate: DateModel = new DateModel();
  options: DatePickerOptions;
  orders: any[] = [];
  date: Date;
  details = true;
  filterList: any[] = [];
  total = [];
  reportList: any[] = [];
  choosen = false;
  totalAll = 0.0;
  constructor(private orderService: OrderService, private roomService: RoomService) {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders.filter(order => order.checkOutTime !== '');
      for (let i = 0; i < orders.length; i++) {
        this.roomService.getRoom(orders[i].roomId).subscribe(room => {
          orders[i].roomId = room.name;
        });
        this.orderService.getServices(orders[i].$key).subscribe(services => {
          orders[i].services = services;
        });
      }
    });
    this.options = new DatePickerOptions();
    this.options.maxDate = new Date();
    this.options.format = 'MM/YYYY';
    this.options.todayText = 'Tháng';
    this.options.selectYearText = 'Chọn Năm';
    this.options.clearText = 'Xóa';
    this.options.style = 'bold';
    this.options.initialDate = new Date();
    this.fromDate.month = new Date().getMonth.toString();
    this.fromDate.year = new Date().getFullYear.toString();
    this.toDate.month = new Date().getMonth.toString();
    this.toDate.year = new Date().getFullYear.toString();
  }

  ngOnInit() {
    //this.setDate();
  }

  setDate() {
    this.filterList = [];
    const fromMonth = Number.parseInt(this.fromDate.month) - 1;
    const fromYear = Number.parseInt(this.fromDate.year);
    const toMonth = Number.parseInt(this.toDate.month) - 1;
    const toYear = Number.parseInt(this.toDate.year);
    const length = this.orders.length;
    for (let index = 0; index < length; index++) {
      const date = new Date(this.orders[index].checkOutTime);
      const month = date.getMonth();
      const year = date.getFullYear();
      const valid = date.getMonth() === fromMonth && date.getFullYear() === fromYear;
      if (valid) {
        this.filterList.push(this.orders[index]);
      }
    }
    this.filterList = this.filterList.map(order => {
      let date = new Date(order.checkOutTime);
      let dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
      let service = 0.0;
      order.services.forEach(element => {
        if (element.unit === `giờ`) {
          service += element.price;
        } else {
          service += element.price * element.quantity;
        }
      });
      return {
        date: dateString,
        service: service,
        adjustment: order.adjustment,
        discount: order.discount,
        total: order.total
      }
    });
    this.filterList = this.groupBy(this.filterList, function (item) {
      return [item.date];
    });
    this.filterList.forEach(arr => {
      let subTotal = 0.0;
      arr.forEach(item => {
        subTotal += item.total;
      });
      this.total.push(subTotal);
    });

    this.filterList.sort(x => x.date);

    this.filterList.forEach( list => {
      let adjustment = 0.0;
      let discount = 0.0;
      let service = 0.0;
      let total = 0.0;
      let date = '';
      list.forEach( item => {
        date = item.date;
        adjustment += item.adjustment || 0;
        discount += item.discount || 0;
        service += item.service || 0;
        total += item.total || 0;
      });
      this.reportList.push({
        date: date,
        adjustment: adjustment,
        discount: discount,
        service: service,
        total: total
      });
      this.totalAll += total;
    });
    this.choosen = true;

  }
  groupBy(array, f) {
    var groups = {};
    array.forEach(function (o) {
      var group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
      return groups[group];
    })
  }


}
