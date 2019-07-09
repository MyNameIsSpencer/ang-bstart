import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLessonComponent } from './loading-lesson.component';

describe('LoadingLessonComponent', () => {
  let component: LoadingLessonComponent;
  let fixture: ComponentFixture<LoadingLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
