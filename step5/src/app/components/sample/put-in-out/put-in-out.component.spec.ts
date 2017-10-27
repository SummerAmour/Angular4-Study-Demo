import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutInOutComponent } from './put-in-out.component';

describe('PutInOutComponent', () => {
  let component: PutInOutComponent;
  let fixture: ComponentFixture<PutInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
