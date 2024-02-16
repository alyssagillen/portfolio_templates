import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingShowcaseComponent } from './landing-showcase.component';

describe('LandingShowcaseComponent', () => {
  let component: LandingShowcaseComponent;
  let fixture: ComponentFixture<LandingShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
