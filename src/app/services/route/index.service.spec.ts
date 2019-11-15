import { TestBed } from '@angular/core/testing';

import { IndexRouteService } from './index.service';

describe('IndexRouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexRouteService = TestBed.get(IndexRouteService);
    expect(service).toBeTruthy();
  });
});
