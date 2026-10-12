import { TestBed } from '@angular/core/testing';
import { EaService } from './ea-service';

describe('EaService', () => {
  let service: EaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
