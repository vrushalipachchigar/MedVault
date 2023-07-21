import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { MedicineDetailsComponent } from './components/medicine-details/medicine-details.component';
import { MedicineListComponent } from './components/medicine-list/medicine-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMedicineComponent,
    CreateOrderComponent,
    MedicineDetailsComponent,
    MedicineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
