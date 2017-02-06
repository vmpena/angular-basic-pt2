import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Customer } from '../customers/customer'

@Injectable()
export class CustomerService {

  private dataSource = './app/api/customers/customerData.json';

  constructor(private http: Http) { }

  getCustomers(): Observable<Customer[]> {

    console.log("Getting customers from customer.service...");

    return this.http.get(this.dataSource)
      .map((response: Response) => <Customer[]> response.json())
      .catch(this.handleError);

  }

  getCustomer(id: number): Observable<Customer> {
    return this.getCustomers()
      .map((customers: Customer[]) => customers.find(c => c.ID === id));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
