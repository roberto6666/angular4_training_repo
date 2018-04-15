import { TestBed, inject } from '@angular/core/testing';

import { UnsavedChangeService } from './unsaved-change.service';

describe('UnsavedChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedChangeService]
    });
  });

  it('should be created', inject([UnsavedChangeService], (service: UnsavedChangeService) => {
    expect(service).toBeTruthy();
  }));
});
