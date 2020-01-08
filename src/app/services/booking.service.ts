import { Injectable } from '@angular/core';
import { Booking } from '../Models/Booking';
import { DataService } from './data.service';
import { Layout, Room } from '../Models/Room';
import { formatDate } from '@angular/common';
import { Observable, of } from 'rxjs';
import { UserDataService } from './user/user-data.service';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  private bookings: Array<Booking>;

  constructor(private dataService: DataService, private userService: UserDataService) {
    this.bookings = new Array<Booking>();
    const booking1 = new Booking();
    const user1 = new User();
    user1.name = 'Jone D';
    user1.id = 1;

    const user2 = new User();
    user2.name = 'Victor M';
    user2.id = 2;

    const room1 = new Room();
    room1.id = 1;
    room1.name = 'First Room';
    room1.location = 'First Floor';

    const room2 = new Room();
    room2.id = 2;
    room2.name = 'Second Room';
    room2.location = 'First Floor NE';

    booking1.id = 1 ;
    booking1.user = user1;
    booking1.room = room1;
    booking1.layout = Layout.THEATER;
    booking1.title = 'Test Booking';
    booking1.date = formatDate(new Date() , 'yyyy-MM-dd', 'en-us');
    booking1.startTime = '11:30';
    booking1.endTime = '12:30';
    booking1.participants = 12;

    const booking2 = new Booking();
    booking2.id = 2;
    booking2.user = user2;
    booking2.room = room2;
    booking2.layout = Layout.USHAPE;
    booking2.title = 'Test Booking 2';
    booking2.date = formatDate(new Date() , 'yyyy-MM-dd', 'en-us');
    booking2.startTime = '15:30';
    booking2.endTime = '16:30';
    booking2.participants = 10;


    this.bookings.push(booking1, booking2);
  }

  getBookings(date: string): Observable<Array<Booking>> {
    console.log('getBookings', date);
    const bookings = this.bookings.filter( b => b.date === date);
    return of(bookings);
  }

  getBooking(id: number): Observable<Booking> {
    const booking = this.bookings.find( b => b.id === id);
    return of(booking);
  }

  saveBooking(booking: Booking): Observable<Booking> {
    const origionalBooking = this.bookings.find( b => b.id === booking.id);
    origionalBooking.title = booking.title;
    origionalBooking.date = booking.date;
    origionalBooking.startTime = booking.startTime;
    origionalBooking.endTime = booking.endTime;
    origionalBooking.room = booking.room;
    origionalBooking.user = booking.user;
    origionalBooking.participants = booking.participants;

    return of(origionalBooking);
  }

  addBooking(booking: Booking): Observable<Booking> {
    let id = 0;
    for (const b of this.bookings) {
      if (b.id > id) {
        id = b.id;
      }
    }
    booking.id = id + 1;
    this.bookings.push(booking);
    return of(booking);
  }

  deleteBooking(id: number): Observable<any> {
    console.log('delete Booking', id);
    const b = this.bookings.find(a => a.id === id);
    this.bookings.splice(this.bookings.indexOf(b), 1);

    return of(null);
  }
}
