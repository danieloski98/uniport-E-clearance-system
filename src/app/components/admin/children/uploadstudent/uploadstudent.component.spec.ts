import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadstudentComponent } from './uploadstudent.component';

describe('UploadstudentComponent', () => {
  let component: UploadstudentComponent;
  let fixture: ComponentFixture<UploadstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
