import { Component, OnInit } from '@angular/core';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  description = '';
  amount = 0.0;
  invalid = false;
  constructor(private reservationService: ReservationService) {

   }

  ngOnInit() {
  }

  save() {
    this.reservationService.addReservation({
      description: this.description,
      amount: this.amount,
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    });
    console.log("ADDED");
  }

}
