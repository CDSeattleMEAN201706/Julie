import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { REGIComponent } from './regi.component';

describe('REGIComponent', () => {
  let component: REGIComponent;
  let fixture: ComponentFixture<REGIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REGIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
