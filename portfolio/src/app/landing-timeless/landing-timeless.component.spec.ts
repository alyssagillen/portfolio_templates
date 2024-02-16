import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTimelessComponent } from './landing-timeless.component';

describe('LandingTimelessComponent', () => {
  let component: LandingTimelessComponent;
  let fixture: ComponentFixture<LandingTimelessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingTimelessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingTimelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
