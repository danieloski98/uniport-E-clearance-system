import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearedchipComponent } from './clearedchip.component';

describe('ClearedchipComponent', () => {
  let component: ClearedchipComponent;
  let fixture: ComponentFixture<ClearedchipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearedchipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearedchipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
