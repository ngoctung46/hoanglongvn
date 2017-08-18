import { Observable } from 'rxjs/Observable';
import { RoomService } from './../main/room.service';
import { Component, OnInit } from '@angular/core';
import { DateModel, DatePickerOptions} from 'ng2-datepicker';
import { BookingService } from './booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})


export class BookingComponent implements OnInit {
  name: string = '';
  tel: string = '';
  bookingRoom: any;
  bookingHour: string = ''
  rooms: any[];
  bookingDate: DateModel;
  hours: string[] = [];
  options: DatePickerOptions;
  booking: any;
  note: string;
  bookings: Observable<any[]>;
  constructor(private roomService: RoomService, private router: Router, private bookingService: BookingService) {
    for (let i = 0; i <= 24; i++){
      this.hours.push(`${i} : 00`);
    }
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms);
    this.options = new DatePickerOptions();
    this.options.format = 'DD/MM/YYYY';
    this.options.todayText = 'Hôm Nay';
    this.options.selectYearText = 'Chọn Năm';
    this.options.clearText = 'Xóa';
    this.options.style = 'bold';
    this.options.initialDate = new Date();
  }

  ngOnInit() {
    this.bookings = this.bookingService.getBookings();
  }

  remove(key) {
    this.bookingService.removeBooking(key);
  }

  save() {
    let date: string = this.bookingDate.day + this.bookingDate.month + this.bookingDate.year;
    this.booking = { 
      name: this.name, 
      tel: this.tel, 
      room: this.bookingRoom.name, 
      date: date, 
      hour: this.bookingHour,
      note: this.note || '',
      status: 0
     }
    this.bookingService.addBooking(this.booking);
    this.router.navigate(['/']);
  }

}
