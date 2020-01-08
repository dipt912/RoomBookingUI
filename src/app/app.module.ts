import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { CalenderComponent } from './components/calender/calender.component';
import { UsersComponent } from './components/admin/users/users.component';
import { RoomsComponent } from './components/admin/rooms/rooms.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { RoomDetailComponent } from './components/admin/rooms/room-detail/room-detail.component';
import { UserDetailComponent } from './components/admin/users/user-detail/user-detail.component';
import { UserEditComponent } from './components/admin/users/user-edit/user-edit.component';
import { RoomEditComponent } from './components/admin/rooms/room-edit/room-edit.component';
import { EditBookingComponent } from './components/calender/edit-booking/edit-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    CalenderComponent,
    UsersComponent,
    RoomsComponent,
    PageNotFoundComponent,
    RoomDetailComponent,
    UserDetailComponent,
    UserEditComponent,
    RoomEditComponent,
    EditBookingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
