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
  filterList: any[] = [];
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
    this.setDate();
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
  }

}
