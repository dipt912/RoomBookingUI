import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderComponent } from './calender.component';
import { BookingService } from '../../services/booking.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';


describe('CalenderComponent', () => {
  let component: CalenderComponent;
  let fixture: ComponentFixture<CalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderComponent ],
      providers: [ BookingService],
      imports: [ FormsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.selectedDate = '';
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
