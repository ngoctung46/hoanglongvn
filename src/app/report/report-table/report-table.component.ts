import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {
  @Input() orders: any[] = [];
  total = 0.0;
  constructor() {
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
      this.orders[i].total = this.orders[i].total + (this.orders[i].adjustment || 0.0) + (this.orders[i].discount || 0.0);
      this.total += this.orders[i].total;
    };
  }

}
