import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})

export class ParametersComponent implements OnInit {

  private subscription: Subscription;
  city: string;
  code: string;

  constructor() { }

  ngOnInit() {

  }


}
