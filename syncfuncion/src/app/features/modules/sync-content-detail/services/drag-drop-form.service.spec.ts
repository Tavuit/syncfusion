import { TestBed } from '@angular/core/testing';

import { DragDropFormService } from './drag-drop-form.service';

describe('DragDropFormService', () => {
  let service: DragDropFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragDropFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
