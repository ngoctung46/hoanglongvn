import { BookingService } from './../../booking/booking.service';
import { Component, OnInit, HostBinding, Input, ViewChild } from '@angular/core';
import { Room } from '../room.model';
import { Customer } from '../customer.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RoomService } from '../room.service';
import { CustomerService } from '../customer.service';
import { OrderService } from '../order.service';
import { Order } from '../order.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Service } from '../service.model';
import { RoomStatus } from '../room-type';
@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})

export class RoomCardComponent implements OnInit {
  @ViewChild('customerModal') customerModal;
  @ViewChild('searchForm') searchForm;
  @ViewChild('infoModal') infoModal;
  @ViewChild('orderModal') orderModal;
  @ViewChild('moveRoomModal') moveRoomModal;
  @HostBinding('attr.class') cssClass = 'card';
  @Input() room: Room;
  isDirty: boolean;
  selectedRoom: Room = new Room('', '', 1, 0, false, 1, '', '');
  customerId = '';
  order: Order;
  orderId = '';
  moveRoom: Room;
  rooms: Room[];
  booking: any;

  constructor(public fb: FormBuilder,
    public bookingService: BookingService,
    public roomService: RoomService,
    public customerService: CustomerService,
    public orderService: OrderService,
    public db: AngularFireDatabase,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) {
  }

  ngOnInit() {
    const today = new Date();
    let date = (today.getDate() + 1).toString() + `0${(today.getMonth() + 1).toString()}` + today.getFullYear().toString();
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms.filter(x => !x.isOccupied));
    this.booking = this.bookingService.getBookingsWithDay(date).subscribe( x => {
     this.booking = x.filter(x => x.room === this.room.name)[0]; 
    });
  }

  setSelected(room: Room) {
    this.selectedRoom = room;
  }

  checkOut(room: Room): void {
    this.router.navigate(['/orders', room.orderId, 'no'], { skipLocationChange: true });
  }

  clean(room: Room): void {
    room.status = 1;
    room.isOccupied = false;
    this.roomService.updateRoom(room.$key, { status: room.status, isOccupied: false });
  }

  showCustomerSearchModal(): void {
    this.searchForm.show();
  }

  markAsDirtyOrClean(room: Room): void {
    if (room.status == 1) room.status = 2;
    else room.status = 1;
    this.roomService.updateRoom(room.$key, { status: room.status });
  }

  move() {
    this.moveRoom.orderId = this.room.orderId;
    this.moveRoom.isOccupied = true;
    this.roomService.updateRoom(this.moveRoom.$key, { orderId: this.room.orderId, isOccupied: true});
    this.room.isOccupied = false;
    this.room.orderId = ``;
    this.roomService.updateRoom(this.room.$key, {orderId: '', isOccupied: false });
    this.moveRoomModal.hide();  
  }
}





