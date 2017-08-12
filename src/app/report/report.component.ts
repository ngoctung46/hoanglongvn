import { Component, OnInit, HostBinding } from '@angular/core';
import { OrderService } from '../main/order.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  orders: any[];
  @HostBinding(`attr.css`) cssClass = `ui main container`;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe( orders => {
      this.orders = orders.filter( order => order.checkOutTime !== '');
    });
  }

}
