import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccurateCheckTurnComponent } from './accurate-check-turn.component';

describe('AccurateCheckTurnComponent', () => {
  let component: AccurateCheckTurnComponent;
  let fixture: ComponentFixture<AccurateCheckTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccurateCheckTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccurateCheckTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
