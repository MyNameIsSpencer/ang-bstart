import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLessonComponent } from './icons-lesson.component';

describe('IconsLessonComponent', () => {
  let component: IconsLessonComponent;
  let fixture: ComponentFixture<IconsLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
