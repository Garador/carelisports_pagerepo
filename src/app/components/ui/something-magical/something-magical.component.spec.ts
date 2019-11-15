import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingMagicalComponent } from './something-magical.component';

describe('SomethingMagicalComponent', () => {
  let component: SomethingMagicalComponent;
  let fixture: ComponentFixture<SomethingMagicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomethingMagicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingMagicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
