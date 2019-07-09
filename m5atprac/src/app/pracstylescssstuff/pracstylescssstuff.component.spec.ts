import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracstylescssstuffComponent } from './pracstylescssstuff.component';

describe('PracstylescssstuffComponent', () => {
  let component: PracstylescssstuffComponent;
  let fixture: ComponentFixture<PracstylescssstuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracstylescssstuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracstylescssstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
