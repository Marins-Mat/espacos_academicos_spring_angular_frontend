import { TestBed } from '@angular/core/testing';
import { IesService } from './ies-service';

describe('IesService', () => {
  let service: IesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
