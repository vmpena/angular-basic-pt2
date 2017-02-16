import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  searchTerm: string;

  constructor() { }

  ngOnInit() {
    console.log("Inside ParentComponent. Value of searchTerm: ", this.searchTerm);
  }

  getData(inputString: string){
    this.searchTerm = inputString;
  }

}
