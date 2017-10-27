import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCheckUploadComponent } from './common-check-upload.component';

describe('CommonCheckUploadComponent', () => {
  let component: CommonCheckUploadComponent;
  let fixture: ComponentFixture<CommonCheckUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCheckUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCheckUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
