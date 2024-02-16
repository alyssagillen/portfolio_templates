import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMinimalistComponent } from './landing-minimalist.component';

describe('LandingMinimalistComponent', () => {
  let component: LandingMinimalistComponent;
  let fixture: ComponentFixture<LandingMinimalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingMinimalistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingMinimalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
