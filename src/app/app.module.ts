import { BookingService } from './booking/booking.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { MainModule } from './main/main.module';
import { RouterModule } from '@angular/router';
import { ReportModule } from './report/report.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DatePickerModule } from 'ng2-datepicker';
import { ReservationService } from './reservation/reservation.service';

import * as $ from 'jquery';
import { ReservationComponent } from './reservation/reservation.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ReservationComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MenuModule,
    MainModule,
    ReportModule,
    AppRoutingModule,
    DatePickerModule
  ],
  providers: [ ReservationService, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
