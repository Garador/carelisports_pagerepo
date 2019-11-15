import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JotformComponent } from './jotform.component';

describe('JotformComponent', () => {
  let component: JotformComponent;
  let fixture: ComponentFixture<JotformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JotformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JotformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
