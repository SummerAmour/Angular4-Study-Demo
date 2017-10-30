import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyCheckTurnComponent } from './phy-check-turn.component';

describe('PhyCheckTurnComponent', () => {
  let component: PhyCheckTurnComponent;
  let fixture: ComponentFixture<PhyCheckTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyCheckTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyCheckTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
