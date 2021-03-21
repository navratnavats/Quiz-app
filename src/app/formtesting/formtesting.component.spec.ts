import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtestingComponent } from './formtesting.component';

describe('FormtestingComponent', () => {
  let component: FormtestingComponent;
  let fixture: ComponentFixture<FormtestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
