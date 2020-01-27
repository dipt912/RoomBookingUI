import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { DataService } from '../../../services/data.service';
import { ResetService } from '../../../services/reset.service';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let dataService = new DataService();
  let restService = new ResetService();
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsComponent ],
      imports: [ RouterTestingModule],
      providers: [
        {
          provide: DataService ,  useValue: dataService
        },
        {
          provide: ResetService ,  useValue: restService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    component.rooms =  [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
