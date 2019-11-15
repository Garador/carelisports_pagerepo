import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyExperienceComponent } from './disney-experience.component';

describe('DisneyExperienceComponent', () => {
  let component: DisneyExperienceComponent;
  let fixture: ComponentFixture<DisneyExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisneyExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
