import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReservationComponent } from './reservation/reservation.component';
const appRoutes: Routes = [
  { path: '',   redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: './main/main.module#MainModule' },
  { path: 'report', loadChildren: './report/report.module#ReportModule' },
  { path: 'reservation', component: ReservationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, { enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}