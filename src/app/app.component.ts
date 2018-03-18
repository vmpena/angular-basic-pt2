import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Basic Angular app - Part 2';
  description = 'Brief overview of features';

  year = new Date().getFullYear();
}
