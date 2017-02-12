import { Component, OnInit } from '@angular/core';
import { Greeter, SearchParameter } from './typescript-classes';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})

export class ClassesComponent implements OnInit {

  greetingMessage: Greeter;
  searchParam: SearchParameter;

  constructor() { }

  ngOnInit() {

    console.log("Inside ngOnInit of ClassesComponent...");
    this.greetingMessage = new Greeter("world!");

    this.createParameters();
  }

  createParameters(){
    let param = "&fq=";
    let paramValue = "manufacturer:\"fender\"";

    this.searchParam = new SearchParameter(param, paramValue);

  }

}
