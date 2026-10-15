import { TestBed } from '@angular/core/testing';
import { SolicitacaoEspacoService } from './solicitacao-espaco-service';

describe('SolicitacaoEspacoService', () => {
  let service: SolicitacaoEspacoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacaoEspacoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
