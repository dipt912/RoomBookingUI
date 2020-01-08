import { Injectable, EventEmitter } from '@angular/core';
import { Room } from '../Models/Room';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  resetRoomFormEvent = new EventEmitter<Room>();
  resetUserFormEvent = new EventEmitter<User>();
  constructor() { }
}
