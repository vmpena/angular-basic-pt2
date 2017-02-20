// Implement Parameterized Route

//  1. Import core Angular libraries for routing and lifecycle management
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//  2. Import Subscription from rxjs
import { Subscription } from 'rxjs/Subscription';

//  3. Import any custom data type(s) and Service


@Component({
  selector: 'app-parameter-details',
  templateUrl: './parameter-details.component.html',
  styleUrls: ['./parameter-details.component.css']
})

//  4. Implement OnInit and OnDestroy
export class ParameterDetailsComponent implements OnInit,OnDestroy{

  //  5. add private member to hold reference to rxjs Subscription
  private subscription: Subscription;

  // create properties to hold values passed via route parameters
  city: string = "";
  code: string = "";

  initialized:boolean = false;

  //  6. add reference to custom data type

  //  7. add references to Routing objects and data Service
  constructor(private route: ActivatedRoute, private router: Router) { }

  //  8. implement ngOnInit
  ngOnInit(): void {

    this.subscription = this.route.params.subscribe(
      params => {
        this.city = params['city'];
        this.code = params['code'];

        console.log("Inside this.subscription. Value of this.code: ", this.code);

        if(typeof this.code === "undefined" || typeof this.city === "undefined"){
          console.log("this.code is undefined");
        }
        else{
          this.initialized = true;

          // route parameters could be passed to internal method
          // this.getCity(city);
        }

      });
  }

  getRoute(_city:string, _code:string){
    this.router.navigate(['/parameter-details', {city: _city, code:_code}]);
  }

  //  9. implement OnDestroy
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/parameters']);
  }


}
