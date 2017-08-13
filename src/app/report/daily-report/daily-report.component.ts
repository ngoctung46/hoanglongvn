import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../main/order.service';
import { RoomService } from '../../main/room.service';
import { CustomerService } from '../../main/customer.service';
import { Order } from '../../main/order.model';
import { Observable } from 'rxjs/Observable';
import { Service } from '../../main/service.model';
import { DateModel, DatePickerOptions } from 'ng2-datepicker';
import { ReservationService } from '../../reservation/reservation.service';
@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {
  fromDate: DateModel = new DateModel();
  toDate: DateModel = new DateModel();
  options: DatePickerOptions;
  orders: any[] = [];
  date: Date;
  filterList: any[] = [];
  reservationList: any[];
  total = 0.0;
  constructor(private orderService: OrderService,
    private roomService: RoomService,
    private customerService: CustomerService,
    private reservationService: ReservationService) {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders.filter(order => order.checkOutTime !== '');
      this.date = new Date(this.orders[0].checkOutTime);
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
    this.options.format = 'DD/MM/YYYY';
    this.options.todayText = 'Hôm Nay';
    this.options.selectYearText = 'Chọn Năm';
    this.options.clearText = 'Xóa';
    this.options.style = 'bold';
    this.options.initialDate = new Date();
    this.fromDate.day = new Date().getDate.toString();
    this.fromDate.month = new Date().getMonth.toString();
    this.fromDate.year = new Date().getFullYear.toString();
    this.toDate.day = new Date().getDate.toString();
    this.toDate.month = new Date().getMonth.toString();
    this.toDate.year = new Date().getFullYear.toString();

  }

  ngOnInit() {
    this.setDate();
  }

  setDate() {
    this.total = 0.0;
    this.filterList = [];
    const fromDay = Number.parseInt(this.fromDate.day);
    const fromMonth = Number.parseInt(this.fromDate.month) - 1;
    const fromYear = Number.parseInt(this.fromDate.year);
    const toDay = Number.parseInt(this.toDate.day);
    const toMonth = Number.parseInt(this.toDate.month) - 1;
    const toYear = Number.parseInt(this.toDate.year);
    const length = this.orders.length;
    for (let index = 0; index < length; index++) {
      const date = new Date(this.orders[index].checkOutTime);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const valid = date.getDate() >= fromDay && date.getMonth() >= fromMonth && date.getFullYear() >= fromYear
        && date.getDate() <= toDay && date.getMonth() <= toMonth && date.getFullYear() <= toYear;
      if (valid) {
        this.filterList.push(this.orders[index]);
      }
    }
    let firstDate = this.toDate.day + toMonth.toString() + this.toDate.year;
    this.reservationService.getReservationsByDate(firstDate).subscribe(reservations => {
      this.reservationList = reservations;
      this.reservationList.forEach(r => this.total += r.amount); 
    });

  }

}
