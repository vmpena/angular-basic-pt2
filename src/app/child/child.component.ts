import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // the parent variable is 'searchTerm' but here
  // we refer to it locally as 'term'
  @Input('searchTerm') term:string;

  constructor() { }

  ngOnInit() {
    console.log("Inside ChildComponent. Value of searchTerm: ", this.term);
  }

}
