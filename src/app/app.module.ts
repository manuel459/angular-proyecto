import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    OrdersComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
