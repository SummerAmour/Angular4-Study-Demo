import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIceComponent } from './order-ice.component';

describe('OrderIceComponent', () => {
  let component: OrderIceComponent;
  let fixture: ComponentFixture<OrderIceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderIceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderIceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
