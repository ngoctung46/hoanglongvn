import { Component, OnInit, ViewChild } from '@angular/core';
import { SERVICES, Service } from '../service.model';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-hotel-service',
  templateUrl: './hotel-service.component.html',
  styleUrls: ['./hotel-service.component.css']
})
export class HotelServiceComponent implements OnInit {
  service: Service = new Service();
  services = SERVICES;
  orderId: string;
  servicesList: any[];
  @ViewChild('hotelServiceModal') hotelServiceModal;
  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
      this.orderService.getAllServices(this.orderId).subscribe(x => this.servicesList = x);
    });
    this.hotelServiceModal.show();
    (<any>$('.ui.dropdown')).dropdown();
  }

  add() {
    const index = this.servicesList.findIndex(x => x.description === this.service.description);
    if (index !== -1) {
      const totalQuantity :number = Number.parseFloat(this.servicesList[index].quantity) + this.service.quantity;
      this.orderService.updateService(this.orderId, this.servicesList[index].$key, {
        quantity: totalQuantity
      });
      console.log(`Update ${this.service.quantity} to the ${totalQuantity}`);
    } else {
      this.orderService.addService(this.orderId, this.service);
      console.log(`Add ${this.service} to the ${this.orderId}`);
    }

    this.hotelServiceModal.hide();
    location.reload();
  }

}
