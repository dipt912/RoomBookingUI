import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Booking } from '../../../Models/Booking';
import { DataService } from '../../../services/data.service';
import { UserDataService } from '../../../services/user/user-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../services/booking.service';
import { Room, Layout } from '../../../Models/Room';
import { User } from '../../../Models/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit, OnDestroy {

  booking: Booking;
  rooms: Array<Room>;
  users: Array<User>;
  layouts = Object.keys(Layout);
  layoutEnums = Layout;

  getRoomSub: Subscription;
  getUserSub: Subscription;

  constructor(
    private roomService: DataService ,
    private userService: UserDataService,
    private router: Router,
    private bookingServie: BookingService,
    private route: ActivatedRoute
  ) {
      const id = this.route.snapshot.queryParams['id'];

      if (id) {
        this.bookingServie.getBooking(+id).subscribe( (booking) => {
          this.booking = booking;
        });
      } else {
         this.booking = new Booking();
      }

    console.log('selected Booking', id,  this.booking);

  }

  ngOnInit() {
    this.getRoomSub =  this.roomService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });

   this.getUserSub = this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  saveBooking() {

    if (this.booking.id) {
      this.bookingServie.saveBooking(this.booking).subscribe(() => {
        this.router.navigate(['']);
      });
    } else {
      this.bookingServie.addBooking(this.booking).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

  ngOnDestroy() {
    this.getRoomSub.unsubscribe();
    this.getRoomSub.unsubscribe();
  }

}
