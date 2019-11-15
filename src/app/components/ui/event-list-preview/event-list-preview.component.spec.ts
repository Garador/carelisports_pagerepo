import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListPreviewComponent } from './event-list-preview.component';

describe('EventListPreviewComponent', () => {
  let component: EventListPreviewComponent;
  let fixture: ComponentFixture<EventListPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
