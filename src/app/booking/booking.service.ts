import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class BookingService {

  constructor(private db: AngularFireDatabase) { }

  getBookings() {
    return this.db.list('bookings');
  }

  getBookingsWithDay(date: string) {
    return this.db.list('bookings',{query: {
      orderByChild: 'date',
      equalTo: date
      }
    });
  }
  addBooking(booking: any) {
    return this.db.list('bookings').push(booking);
  }
  removeBooking(key: string) {
    return this.db.list('bookings').remove(key);
  }
  markCheckedIn(key: string) {
    return this.db.list('bookings').update(key,{status: 1});
  }

}
