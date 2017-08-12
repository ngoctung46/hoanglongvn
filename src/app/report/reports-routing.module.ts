import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportComponent } from './report.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { PeriodicalReportComponent } from './periodical-report/periodical-report.component';
const reportRoutes: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
      {
        path: '',
        redirectTo: 'daily-report',
        pathMatch: 'full'
      },
      {
        path: 'daily-report',
        component: DailyReportComponent
      },
      {
        path: 'monthly-report',
        component: MonthlyReportComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      reportRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ReportRoutingModule { }