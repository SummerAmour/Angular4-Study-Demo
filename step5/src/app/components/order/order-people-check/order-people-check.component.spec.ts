import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPeopleCheckComponent } from './order-people-check.component';

describe('OrderPeopleCheckComponent', () => {
  let component: OrderPeopleCheckComponent;
  let fixture: ComponentFixture<OrderPeopleCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPeopleCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPeopleCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
