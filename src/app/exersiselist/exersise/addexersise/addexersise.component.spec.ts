import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexersiseComponent } from './addexersise.component';

describe('AddexersiseComponent', () => {
  let component: AddexersiseComponent;
  let fixture: ComponentFixture<AddexersiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddexersiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexersiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
