import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Room } from '../../../Models/Room';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResetService } from '../../../services/reset.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {
  rooms: Array<Room>;
  selectedRoom: Room;
  action: string;
  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private resetService: ResetService
            ) { }

  routeSubscription: Subscription;

  ngOnInit() {
    this.dataService.getRooms().subscribe((data) => {
      this.rooms = data;
    });
    this.routeSubscription = this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      this.action = null;
      if (id) {
        this.selectedRoom = this.rooms.find(room => room.id === +id);
        this.action = params['action'];
      }
      if ( this.action === 'add') {
        this.selectedRoom = new Room();
        this.action = 'edit';
        this.resetService.resetRoomFormEvent.emit(this.selectedRoom);
      }
    });
  }

  setSelectRoom( id: number) {
    console.log('setSelectRoom', id);
    this.router.navigate(['admin', 'rooms'] , {  queryParams : { id: id, action: 'view'}});
  }

 addRoom( ) {
    this.router.navigate(['admin', 'rooms'] , {  queryParams : {  action: 'add'}});
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
