import { Component, OnInit } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  description = '';
  amount = 0.0;
  invalid = false;
  reservations: any = [];
  constructor(private reservationService: ReservationService, private router: Router) {

  }

  ngOnInit() {
  }

  save() {
    const date = (new Date().getDate().toString()) + (new Date().getMonth().toString()) + (new Date().getFullYear().toString());
    this.reservationService.addReservation({
      description: this.description,
      amount: this.amount,
      date: date,
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    });
    this.router.navigate(['/']);
  }

}
