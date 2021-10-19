import { TestBed } from '@angular/core/testing';

import { ApiOperationsService } from './api-operations.service';

describe('ApiOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiOperationsService = TestBed.get(ApiOperationsService);
    expect(service).toBeTruthy();
  });
});
