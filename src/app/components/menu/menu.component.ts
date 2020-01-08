import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(  private router: Router) { }

  ngOnInit() {
  }

  navigateToRoomAdmin() {
    this.router.navigate( [ 'admin' , 'rooms']);
  }

  navigateToRoomUsers() {
    this.router.navigate( [ 'admin' , 'users']);
  }

  navigteToHome() {
    this.router.navigate( [ '']);
  }

}
