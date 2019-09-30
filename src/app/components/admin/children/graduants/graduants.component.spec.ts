import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduantsComponent } from './graduants.component';

describe('GraduantsComponent', () => {
  let component: GraduantsComponent;
  let fixture: ComponentFixture<GraduantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
