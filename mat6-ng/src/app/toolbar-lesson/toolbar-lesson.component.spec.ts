import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarLessonComponent } from './toolbar-lesson.component';

describe('ToolbarLessonComponent', () => {
  let component: ToolbarLessonComponent;
  let fixture: ComponentFixture<ToolbarLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
