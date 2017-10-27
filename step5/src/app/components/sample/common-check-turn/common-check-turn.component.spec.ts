import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCheckTurnComponent } from './common-check-turn.component';

describe('CommonCheckTurnComponent', () => {
  let component: CommonCheckTurnComponent;
  let fixture: ComponentFixture<CommonCheckTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCheckTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCheckTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
