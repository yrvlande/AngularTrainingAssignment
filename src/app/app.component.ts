import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Practice';
  navLinks: any[];

  constructor() {
     this.navLinks = [
       {lable: 'Administrator'},
       {lable: 'Human Resources'}
     ];

  }
}
