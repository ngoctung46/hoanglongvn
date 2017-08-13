import { Component, OnInit, HostBinding } from '@angular/core';
import { RoomService } from './room.service';
import { Room } from './room.model';
import { RoomType, RoomStatus } from './room-type';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CustomerService } from './customer.service'; 
import {Observable} from 'rxjs/Observable';
import { Customer} from './customer.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  vacantRooms: number = 0;
  occupiedRooms: number = 0;
  dirtyRooms: number = 0 ;
  @HostBinding('attr.class') cssClass = 'ui main container';
  rooms: FirebaseListObservable<Room[]>;
  constructor(
    private roomService: RoomService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
    this.roomService.getRooms().subscribe( rooms => {
      this.vacantRooms = rooms.filter( x => !x.isOccupied).length || 0;
      this.occupiedRooms = rooms.filter( x => x.isOccupied).length;
      this.dirtyRooms = rooms.filter( x => x.status == 2).length;
    });
  }
}
