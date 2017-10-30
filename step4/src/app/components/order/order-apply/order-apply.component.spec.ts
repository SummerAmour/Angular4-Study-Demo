import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderApplyComponent } from './order-apply.component';

describe('OrderApplyComponent', () => {
  let component: OrderApplyComponent;
  let fixture: ComponentFixture<OrderApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
