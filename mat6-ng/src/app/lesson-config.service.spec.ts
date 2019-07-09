import { TestBed } from '@angular/core/testing';

import { LessonConfigService } from './lesson-config.service';

describe('LessonConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessonConfigService = TestBed.get(LessonConfigService);
    expect(service).toBeTruthy();
  });
});
