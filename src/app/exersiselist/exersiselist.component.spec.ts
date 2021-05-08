import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExersiselistComponent } from './exersiselist.component';

describe('ExersiselistComponent', () => {
  let component: ExersiselistComponent;
  let fixture: ComponentFixture<ExersiselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExersiselistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExersiselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
