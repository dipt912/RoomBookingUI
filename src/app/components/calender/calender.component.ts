import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  selectedDate: Date;
  constructor() {
    this.selectedDate = new Date();
  }

  ngOnInit() {
  }

}
