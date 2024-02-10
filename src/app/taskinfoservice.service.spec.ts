import { TestBed } from '@angular/core/testing';

import { TaskinfoserviceService } from './taskinfoservice.service';

describe('TaskinfoserviceService', () => {
  let service: TaskinfoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskinfoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
