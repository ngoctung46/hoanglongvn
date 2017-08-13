import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ReservationService {
  reservations: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.reservations = db.list('reservations');
  }
  getReservationsByDate(day: number, month: number, year: number): Observable<any[]> {
    return this.reservations.filter( x => x.day === day && x.month === month && x.year === year);
  }
  addReservation(data: any) {
    this.reservations.push(data);
    (<any>$('.tiny.modal')).modal('show');
  }
}
