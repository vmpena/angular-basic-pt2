import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  powers = ['Really Smart', 'Elevation', 'Super Strong', 'Introspection'];
  username = "enter...";

  constructor() { }

  onSubmit(formValue){
    console.log(formValue);
  }

  ngOnInit() {
  }

}
