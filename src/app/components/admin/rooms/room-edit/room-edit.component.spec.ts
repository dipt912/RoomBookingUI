import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomEditComponent } from './room-edit.component';
import { DataService } from '../../../../services/data.service';
import { ResetService } from '../../../../services/reset.service';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('RoomEditComponent', () => {
  let component: RoomEditComponent;
  let dataService = new DataService();
  let fixture: ComponentFixture<RoomEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomEditComponent ],
      providers: [ DataService, ResetService,
        {
          provide: DataService ,  useValue: dataService
        }],
      imports : [ ReactiveFormsModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomEditComponent);
    component = fixture.componentInstance;
    component.room =  { id: 1, name: '', location: '', capacities: [ {capacity : '', layout: ''}]  };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
