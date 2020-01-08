import { Component, OnInit, OnDestroy } from '@angular/core';
import { Booking } from '../../Models/Booking';
import { BookingService } from '../../services/booking.service';
import { Subscription } from 'rxjs';
import { Layout } from '../../Models/Room';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit, OnDestroy {

  bookings: Array<Booking>;
  getBookingSubscriber: Subscription;
  layouts = Layout;
  selectedDate: string;
  constructor(
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe( (params) => {
      this.selectedDate = params['date'];
       console.log('params', params);
      if (!this.selectedDate) {
        this.selectedDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-us').toString();
      }

       this.getBookingSubscriber = this.bookingService.getBookings(this.selectedDate).subscribe((bookings) => {
        this.bookings = bookings;
        console.log('Bookings', this.selectedDate,  bookings);
       });
    });
  }

  ngOnDestroy() {
    this.getBookingSubscriber.unsubscribe();
  }

  navigateToEdit(id: number) {
     this.router.navigate(['editBooking'], { queryParams : {id: id }});
  }

  navigateToAddBooking() {
    this.router.navigate(['addBooking']);
  }

  deleteBooking( id: number) {
    this.bookingService.deleteBooking(+id).subscribe();
  }
  dateChange() {
    console.log('change date', this.selectedDate);
    this.router.navigate([''], { queryParams: { date: this.selectedDate }});
  }
}
