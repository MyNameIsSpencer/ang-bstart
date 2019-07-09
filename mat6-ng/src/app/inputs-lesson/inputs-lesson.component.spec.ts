import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsLessonComponent } from './inputs-lesson.component';

describe('InputsLessonComponent', () => {
  let component: InputsLessonComponent;
  let fixture: ComponentFixture<InputsLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
