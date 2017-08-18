import { Service } from './../../main/service.model';
import { Component, OnInit, Input } from '@angular/core';
import { ReservationService } from '../../reservation/reservation.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {
  @Input() orders: any[] = [];
  total = 0.0;
  @Input() reservations: any = [];
  @Input() reservationTotal = 0.0;
  csvReport: Angular2Csv;
  constructor(private reservationService: ReservationService) {

  }

  ngOnInit() {
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].total = 0.0;
      for (let index = 0; index < this.orders[i].services.length; index++) {
        if (this.orders[i].services[index].unit === `giờ`) {
          this.orders[i].total += this.orders[i].services[index].price;
        } else {
          this.orders[i].total += this.orders[i].services[index].price * this.orders[i].services[index].quantity;
        }
      }
      this.orders[i].total = this.orders[i].total + (this.orders[i].adjustment || 0.0) - (this.orders[i].discount || 0.0);
      this.total += this.orders[i].total;
    };
  }

  remove(key) {
    this.reservationService.deleteResevation(key);
  }

  export() {
    let orders = this.orders;
    for (let i = 0; i < orders.length; i++) {
      let services = ``;
        for ( let j = 0; j < orders[i].services.length; j++){
          if(j > 0) services += `\n`;          
          services += `${orders[i].services[j].description} Số Lượng: ${orders[i].services[j].quantity} Tổng Cộng: ${orders[i].services[j].quantity * orders[i].services[j].price}`;
        }
        orders[i].services = services;
    }
    orders = orders.map( order => new Object({
      'Room': order.roomId,
      'Services': order.services,
      'Adjustment': order.adjustment || 0.0,
      'Discount': order.discount || 0.0,
      'Total': order.total
    }));
    orders.splice(0, 0, {
      'Room': 'Phòng',
      'Services': 'Dịch Vụ',
      'Adjustment': 'Điều Chỉnh',
      'Discount': 'Giảm Giá',
      'Total': 'Tổng Cộng'
    });
    orders.push({
      Room: '',
      Service: '',
      Adjustment: '',
      Discount: 'Tổng Thu Tiền Phòng',
      Total : this.total
    })
    let reservations = []; 
    reservations = this.reservations.map( x => new Object({
      date: new Date().toLocaleDateString(),
      description: x.description,
      blank1:'',
      blank2:'',
      amount: x.amount
      })
    );
    reservations.splice(0, 0,{
      date: 'Ngày',
      description: 'Khoản Thu/Chi',
      bank1:'',
      blank2:'',
      amount: 'Số Tiền'
    });
    reservations.push({
      Room: '',
      Service: '',
      Adjustment: '',
      Discount: 'Tổng Thu/Chi Ngoài',
      Total : this.reservationTotal
    })

    reservations.push({
      date: '',
      description: '',
      bank1:'',
      blank2:'Tổng Thu Trong Ngày:',
      amount: this.total + this.reservationTotal
    })
    const exportList = orders.concat(reservations); 
    let today = new Date().getDate().toString() + (new Date().getMonth() + 1).toString() + new Date().getFullYear();
    this.csvReport = new Angular2Csv(exportList, `Báo cáo ngày: ${today}`);
  }
}
