import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccurateCheckoutComponent } from './accurate-checkout.component';

describe('AccurateCheckoutComponent', () => {
  let component: AccurateCheckoutComponent;
  let fixture: ComponentFixture<AccurateCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccurateCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccurateCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
