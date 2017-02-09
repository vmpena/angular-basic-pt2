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

import { ParametersComponent } from './parameters/parameters.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParameterDetailsComponent } from './parameter-details/parameter-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FacetsComponent } from './facets/facets.component';

import { CustomerService } from "./services/customer.service";
import { FacetService } from "./services/facet.service";


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
    ChildComponent,
    FacetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Routing
  ],
  providers: [ CustomerService, FacetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
