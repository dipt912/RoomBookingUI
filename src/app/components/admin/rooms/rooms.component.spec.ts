import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { DataService } from '../../../services/data.service';
import { ResetService } from '../../../services/reset.service';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Room, Layout } from '../../../Models/Room';
import { FormsModule } from '@angular/forms';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsComponent ],
      imports: [ RouterTestingModule, FormsModule],
      providers: [  ResetService,  DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    component.selectedRoom =  { id: 1, name: '', location: '', capacities: [ {capacity : 10 , layout: Layout.THEATER}]  };
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
