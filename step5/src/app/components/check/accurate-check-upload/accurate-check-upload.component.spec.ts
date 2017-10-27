import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccurateCheckUploadComponent } from './accurate-check-upload.component';

describe('AccurateCheckUploadComponent', () => {
  let component: AccurateCheckUploadComponent;
  let fixture: ComponentFixture<AccurateCheckUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccurateCheckUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccurateCheckUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
