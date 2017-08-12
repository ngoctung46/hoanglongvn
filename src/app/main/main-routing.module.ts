import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { HotelServiceComponent } from './hotel-service/hotel-service.component';
const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent,
    },
    {
        path: 'hotel-services/:orderId',
        component: HotelServiceComponent
    },
    {
        path: 'orders/:id/:edit',
        component: OrderComponent
    },
    {
        path: 'customer-check-in/:customerId/:roomId',
        component: CustomerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            mainRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }