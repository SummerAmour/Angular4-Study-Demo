import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyCheckoutComponent } from './phy-checkout.component';

describe('PhyCheckoutComponent', () => {
  let component: PhyCheckoutComponent;
  let fixture: ComponentFixture<PhyCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
