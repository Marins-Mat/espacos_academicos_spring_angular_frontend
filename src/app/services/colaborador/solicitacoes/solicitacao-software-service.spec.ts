import { TestBed } from '@angular/core/testing';
import { SolicitacaoSoftwareService } from './solicitacao-software-service';

describe('SolicitacaoSoftwareService', () => {
  let service: SolicitacaoSoftwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacaoSoftwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
