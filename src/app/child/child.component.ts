import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // the parent variable is named 'searchTerm' but we rename
  // it as 'term' to use locally. Tha means that inside the
  // child component, you'd refer to this variable by using
  // {{term}}
  @Input('searchTerm') term:string;

  constructor() { }

  ngOnInit() {
    console.log("Inside ChildComponent. Value of searchTerm: ", this.term);
  }

}
