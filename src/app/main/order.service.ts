import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Service } from './service.model';
@Injectable()
export class OrderService {

  constructor(public db: AngularFireDatabase) { }
  addOrder(order): any {
    return this.db.list('/orders').push(order).then(item => item.key);
  }
  getOrder(key: string): Observable<any> {
    return this.db.object(`/orders/${key}`);
  }
  updateService(orderId: string, key: string, data: any) {
    return this.db.list(`/orders/${orderId}/services`).update(key, data);
  }
  addService(key: string, service: Service): any {
    return this.db.list(`/orders/${key}/services`).push(service);
  }
  getServices(key: string): Observable<any> {
    return this.db.list(`/orders/${key}/services`).map(services => services.map(service => service));
  }
  removeService(orderId: string, key: string) {
    this.db.list(`/orders/${orderId}/services`).remove(key);
  }
  updateOrder(key: string, data: any): void {
    this.db.list('/orders').update(key, data);
  }
  getOrders(): Observable<any[]> {
    return this.db.list('/orders');
  }
}
