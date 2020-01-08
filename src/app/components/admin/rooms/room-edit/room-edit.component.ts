import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Room, Layout, LayoutCapacity } from '../../../../Models/Room';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { Router } from '@angular/router';
import { ResetService } from '../../../../services/reset.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit, OnDestroy {

  @Input()
  room: Room;

  layouts = Object.keys(Layout);
  layoutEnum = Layout;

  // roomForm = new FormGroup(
  //   {
  //     roomName : new FormControl('roomName' ),
  //     location : new FormControl('location'),
  //   }
  // );

  roomForm: FormGroup;
  resetEventSub: Subscription;


  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private resetService: ResetService
  ) { }

  ngOnInit() {

    this.initializeForm();

    this.resetEventSub = this.resetService.resetRoomFormEvent.subscribe( (room) => {
      this.room = room;
      this.initializeForm();
    });
  }

  initializeForm() {
    this.roomForm = this.formBuilder.group({
      roomName : [this.room.name, Validators.required],
      location : [this.room.location, Validators.required],
    });
    // this.roomForm.patchValue( { roomName : this.room.name, location: this.room.location});

    for (const layout of this.layouts) {
      const layoutCapacity = this.room.capacities.find( lc => lc.layout === Layout[layout] );
      const initilaCapcity = layoutCapacity ? layoutCapacity.capacity : 0;
      console.log('Reactive Capacity' , initilaCapcity, `layout${layout}`);
      this.roomForm.addControl(`layout${layout}`, this.formBuilder.control(initilaCapcity));
    }
  }

  submitForm() {
    console.log(this.roomForm);
    this.room.name = this.roomForm.controls['roomName'].value;
    this.room.location = this.roomForm.controls['location'].value;
    this.room.capacities = new Array<LayoutCapacity>();
    for (const layout of this.layouts) {
      const layoutCapacity = new LayoutCapacity();
      layoutCapacity.layout = Layout[layout];
      layoutCapacity.capacity = this.roomForm.controls[`layout${layout}`].value;
      this.room.capacities.push(layoutCapacity);
    }

    if (!this.room.id) {
      this.dataService.addRoom(this.room).subscribe((n) => {
        this.router.navigate([ 'admin' , 'rooms'], {queryParams : { action: 'view', id: n.id}});
      } );
    } else {
      this.dataService.updateRoom(this.room).subscribe((n) => {
        this.router.navigate([ 'admin' , 'rooms'], {queryParams : { action: 'view', id: n.id}});
      });
    }
    console.log('room', this.room);
  }

  ngOnDestroy() {
    this.resetEventSub.unsubscribe();
  }
}
