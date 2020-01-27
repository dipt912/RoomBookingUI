import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailComponent } from './room-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../../../services/data.service';
import { Router } from '@angular/router';

describe('RoomDetailComponent', () => {
  let component: RoomDetailComponent;
  let fixture: ComponentFixture<RoomDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDetailComponent ],
      imports : [ RouterTestingModule],
      providers: [ DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
