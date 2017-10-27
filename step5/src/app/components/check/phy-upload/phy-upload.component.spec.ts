import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyUploadComponent } from './phy-upload.component';

describe('PhyUploadComponent', () => {
  let component: PhyUploadComponent;
  let fixture: ComponentFixture<PhyUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
