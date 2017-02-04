import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'How to Contact Us';
  phoneNumber = '1-23-456-7890';
  contactMethods = [ 'email', 'fax', 'Morse code', 'telegram', 'smoke signals'];
  officeIsOpen = true;

  constructor() { }

  ngOnInit() {
  }

}
