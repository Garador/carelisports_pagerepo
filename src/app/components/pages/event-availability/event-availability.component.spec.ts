import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAvailabilityComponent } from './event-availability.component';

describe('EventAvailabilityComponent', () => {
  let component: EventAvailabilityComponent;
  let fixture: ComponentFixture<EventAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
