import { Injectable } from '@angular/core';
import { Room, LayoutCapacity, Layout } from '../Models/Room';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private rooms: Array<Room>;

  constructor() {
    this.rooms = new Array<Room>();
    const room1 = new Room();
    room1.id = 1;
    room1.name = 'First Room';
    room1.location = 'First Floor';

    const capacity1  = new LayoutCapacity();
    capacity1.layout = Layout.THEATER;
    capacity1.capacity = 50;

    const capacity2  = new LayoutCapacity();
    capacity2.layout = Layout.USHAPE;
    capacity2.capacity = 20;

    room1.capacities.push(capacity1);
    room1.capacities.push(capacity2);

    const room2 = new Room();
    room2.id = 2;
    room2.name = 'Second Room';
    room2.location = 'Second Floor';

    const capacity21  = new LayoutCapacity();
    capacity21.layout = Layout.THEATER;
    capacity21.capacity = 10;

    room2.capacities.push(capacity21);

    this.rooms.push(room1);
    this.rooms.push(room2);

  }

  getRooms(): Observable<Array<Room>> {
    return   of(this.rooms);
  }

  updateRoom(room: Room): Observable<Room>  {

    const origionalRoom = this.rooms.find(rm => rm.id === room.id);
    origionalRoom.location = room.location;
    origionalRoom.name = room.name;
    origionalRoom.capacities = room.capacities;
    return of(origionalRoom);
  }

  addRoom(newRoom: Room): Observable<Room>  {
    let id = 0 ;
    for ( const r of this.rooms) {
      if (r.id > id) {
        id = r.id;
      }
    }

    newRoom.id = id + 1 ;

   this.rooms.push(newRoom);
    return of(newRoom);
  }

  deleteRoom( id: number): Observable<any> {
    const room = this.rooms.find(r => r.id === id);
    this.rooms.splice(this.rooms.indexOf(room), 1);

    return of(null);

  }


}
