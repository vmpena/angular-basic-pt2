import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { Routing } from './app.routing';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerService } from "./services/customer.service";
import { ParametersComponent } from './parameters/parameters.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParameterDetailsComponent } from './parameter-details/parameter-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CustomersComponent,
    CustomerDetailComponent,
    ParametersComponent,
    PagenotfoundComponent,
    ParameterDetailsComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Routing
  ],
  providers: [ CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
