import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulsaryComponent } from './bulsary.component';

describe('BulsaryComponent', () => {
  let component: BulsaryComponent;
  let fixture: ComponentFixture<BulsaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulsaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulsaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
