import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'About Us';
  description = 'This is the description property of AboutComponent.';

  constructor() { }

  ngOnInit() {
  }

}
