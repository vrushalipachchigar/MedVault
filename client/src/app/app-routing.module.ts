import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { MedicineDetailsComponent } from './components/medicine-details/medicine-details.component';
import { MedicineListComponent } from './components/medicine-list/medicine-list.component';

const routes: Routes = [{ path: '', redirectTo: 'medicine', pathMatch: 'full' },
{path: '', redirectTo: 'order', pathMatch: 'full'},
{path: 'medicine/:id', component: MedicineDetailsComponent},
{path: 'add', component: AddMedicineComponent},
{path: 'medicine', component: MedicineListComponent},
{path: 'order', component: CreateOrderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
