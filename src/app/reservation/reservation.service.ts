import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class ReservationService {
  reservations: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.reservations = db.list('reservations');
  }
  getReservationsByDate(date): Observable<any[]> {
    return this.db.list('reservations', {
      query: {
        orderByChild: 'date',
        equalTo: date,
      },
    });
  }
  addReservation(data: any) {
    this.reservations.push(data);
    // (<any>$('.tiny.modal')).modal('show');
  }
  deleteResevation(key: string) {
    this.reservations.remove(key);
  }
}
