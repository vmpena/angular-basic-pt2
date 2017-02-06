import { Component, OnInit } from '@angular/core';

import { Customer } from './customer'
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  errorMessage: string;
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {

    console.log("customer.component being initialized...")

    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers,
        error => this.errorMessage = <any>error);
  }

}
