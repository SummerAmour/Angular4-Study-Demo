import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProcessInfluenceComponent } from './test-process-influence.component';

describe('TestProcessInfluenceComponent', () => {
  let component: TestProcessInfluenceComponent;
  let fixture: ComponentFixture<TestProcessInfluenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestProcessInfluenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProcessInfluenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
