import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalenderComponent } from './components/calender/calender.component';
import { UsersComponent } from './components/admin/users/users.component';
import { RoomsComponent } from './components/admin/rooms/rooms.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditBookingComponent } from './components/calender/edit-booking/edit-booking.component';

const routes: Routes = [
  { path: 'admin/users' , component: UsersComponent },
  { path: 'admin/rooms' , component: RoomsComponent },
  { path: '' , component: CalenderComponent },
  { path: 'editBooking' , component: EditBookingComponent },
  { path: 'addBooking' , component: EditBookingComponent },
  { path: '404' , component: PageNotFoundComponent },
  { path: '**' , redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
