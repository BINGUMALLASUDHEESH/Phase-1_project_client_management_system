import { TestBed } from '@angular/core/testing';

import { ProjectinfoserviceService } from './projectinfoservice.service';

describe('ProjectinfoserviceService', () => {
  let service: ProjectinfoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectinfoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
