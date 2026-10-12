import { TestBed } from '@angular/core/testing';
import { CaService } from './ca-service';

describe('CaService', () => {
  let service: CaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
