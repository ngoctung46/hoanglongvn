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
    this.orders.forEach(order => this.total += order.total);
  }

}
