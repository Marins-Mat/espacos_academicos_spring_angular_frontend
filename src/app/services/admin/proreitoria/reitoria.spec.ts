import { TestBed } from '@angular/core/testing';
import { Reitoria } from './reitoria';

describe('Reitoria', () => {
  let service: Reitoria;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reitoria);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
