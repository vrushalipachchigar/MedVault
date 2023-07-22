import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { MedicineDetailsComponent } from './components/medicine-details/medicine-details.component';
import { MedicineListComponent } from './components/medicine-list/medicine-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

const routes: Routes = [{ path: '', redirectTo: 'medicine', pathMatch: 'full' },
{path: '', redirectTo: 'order', pathMatch: 'full'},
{path: 'medicine/:id', component: MedicineDetailsComponent},
{path: 'add', component: AddMedicineComponent},
{path: 'medicine', component: MedicineListComponent},
{path: 'order', component: CreateOrderComponent},
{path: 'order/:id', component: OrderDetailsComponent},
{path: 'orders', component: OrderListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
