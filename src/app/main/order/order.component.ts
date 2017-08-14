import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OrderService } from '../order.service';
import { CustomerService } from '../customer.service';
import { RoomService } from '../room.service';
import { Room } from '../room.model';
import { Order } from '../order.model';
import { Customer } from '../customer.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Service } from '../service.model';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @ViewChild('orderModal') orderModal;
  IsCheckOut = false;
  customer: Observable<Customer>;
  order: Observable<Order>;
  orderId: string;
  total: number = 0.0;
  room: Room;
  roomName: string;
  price: number;
  unit: string;
  quantity: number = 0.0;
  services: Observable<any[]>;
  loading: boolean;
  timeDiff: number;
  day: number = 0.0;
  hour: number = 0.0;
  minutes: number = 0.0;
  discount: number = 0.0;
  roomId: string;
  editting: string;
  adjustment = 0.0;
  totalDay = 0.0;
  pendingUpdate: any;
  pendingAdd: any;
  chekedOut = false;
  displayQty: number = 1;
  updateService: any;
  constructor(
    private orderService: OrderService,
    private roomService: RoomService,
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
      this.editting = params['edit'];
      this.order = this.orderService.getOrder(params['id']);
      this.order.subscribe((order: Order) => {
        this.customer = this.customerService.getCustomer(order.customerId);
        this.services = this.orderService.getServices(params['id']);
        this.services.subscribe(services => {
          this.updateService = services[0];
          const currentDate = new Date();
          const checkInDate = new Date(order.checkInTime);
          const currentDay = currentDate.getDate();
          const currentMonth = currentDate.getMonth();
          const currentYear = currentDate.getFullYear();
          const currentHour = currentDate.getHours();
          const currentMinutes = currentDate.getMinutes();
          const checkInDay = checkInDate.getDate();
          const checkInMonth = checkInDate.getMonth();
          const checkInYear = checkInDate.getFullYear();
          const checkInHour = checkInDate.getHours();
          const checkInMinutes = checkInDate.getMinutes();
          this.roomId = order.roomId;
          this.roomName = this.getRoomName(order.roomId);
          const stayingHour = currentHour - checkInHour;
          const stayingDay = currentDay - checkInDay;
          if (currentMinutes - checkInMinutes < 0) {
            this.minutes = currentMinutes - checkInMinutes + 60;
            this.hour = stayingHour - 1;
          } else {
            this.hour = stayingHour;
            this.minutes = currentMinutes - checkInMinutes;
          }
          if (this.hour < 0) {
            this.hour = stayingHour + 24;
            this.day = stayingDay - 1;
          } else {
            this.day = stayingDay;
          }

          if (stayingDay <= 0 && stayingHour < 4) {
            const totalTime = (((currentHour - checkInHour) * 60) + (currentMinutes - checkInMinutes));
            let totalHour = Math.trunc(totalTime / 60);
            const totalMinute = totalTime % 60;
            if (totalMinute >= 15) {
              totalHour++;
            }
            this.pendingUpdate = this.calculateHourlyRate(services[0], totalHour);
          } else {
            this.calculateDailyRate(services[0], currentHour, currentMinutes, stayingDay, stayingHour);
          }
          for (let index = 1; index < services.length; index++) {
            const element = services[index];
            this.total += element.price * element.quantity;
          }
          this.total += this.price * this.quantity;
          if (this.pendingAdd) {
            this.total += this.pendingAdd.price * this.pendingAdd.quantity;
          }
          this.orderModal.show({ observeChanges: true });

        });
      });
    });
  }

  close() {
    this.total = this.total - this.discount || 0.0 + this.adjustment || 0.0;
    this.orderService.updateOrder(this.orderId, {
      total: this.total,
      checkOutTime: new Date().toString(),
      discount: this.discount,
      adjustment: this.adjustment
    });
    this.roomService.updateRoom(this.roomId, {
      orderId: '',
      status: 2,
      isOccupied: false
    });
    this.orderService.updateService(this.orderId, this.updateService.$key, {
      price: this.price,
      quantity: this.quantity,
      unit: this.unit
    });
    if (this.pendingAdd) {
      this.addService(this.pendingAdd);
    }
    this.orderModal.hide();
    location.reload();
  }
  hide() {
    this.orderModal.hide();
    location.reload();
  }
  remove(key: string) {
    this.orderService.removeService(this.orderId, key);
  }
  calculateHourlyRate(service: any, totalHour: number, recalculate = false): any {
    let price = 0.0, unit = '', quantity = 0.0;
    if (totalHour > 4) {
      return null;
    } else {
      if (totalHour > 3) {
        unit = `giờ`;
        quantity = 1;
        this.displayQty = 4;
        if (service.price === 400000) {
          price = 280000;
        } else {
          price = 210000;
        }
      } else if (totalHour > 2) {
        this.displayQty = 3;
        unit = `giờ`;
        quantity = 1;
        if (service.price === 400000) {
          price = 240000;
        } else {
          price = 190000;
        }
      } else if (totalHour > 1) {
        unit = `giờ`;
        quantity = 1;
        this.displayQty = 2;
        if (service.price === 400000) {
          price = 190000;
        } else {
          price = 150000;
        }
      } else {
        unit = `giờ`;
        quantity = 1;
        this.displayQty = 1
        if (service.price === 400000) {
          price = 120000;
        } else {
          price = 100000;
        }
      }
      if (!recalculate) {
        this.price = price;
        this.unit = unit;
        this.quantity = quantity;
      }
      const updateService = new Service({ description: `Tiền Phòng Theo Giờ`, price: price, unit: unit, quantity: quantity });
      // this.updateService(updateService, service.key);
      return updateService;
    }
  }

  getRoomName(key): string {
    switch (key) {
      case '1': return '201';
      case '2': return '302';
      case '3': return '102';
      case '4': return '202';
      case '5': return '302';
      case '6': return '103';
      case '7': return '203';
      case '8': return '303';
      case '9': return '104';
      case '10': return '204';
      case '11': return '304';
      case '12': return '01';
    }
  }
  calculateDailyRate(service: any,
    checkOutHour: number,
    checkOutMinutes: number,
    totalDay: number,
    stayingHour: number) {
    let price = 0.0, unit = '';
    this.price = price = service.price;
    this.unit = unit = `ngày`;
    this.quantity = totalDay;
    if (stayingHour >= 4 && totalDay <= 0) this.quantity++;
    if (checkOutHour >= 12 && totalDay > 0) {
      const totalTime = (((checkOutHour - 12) * 60) + (checkOutMinutes));
      let totalHour = Math.trunc(totalTime / 60);
      const totalMinute = totalTime % 60;
      if (totalMinute >= 15) {
        totalHour++;
      }
      if (totalHour > 4) {
        this.quantity++;
      } else {
        this.pendingAdd = this.calculateHourlyRate(service, totalHour, true);
      }
    }
    const update = new Service({ description: 'Tiền giờ theo ngày', price: price, unit: unit, quantity: this.quantity });
    this.pendingUpdate = update;
  }

  addService(service: Service) {
    this.orderService.addService(this.orderId, service);
  }
}
