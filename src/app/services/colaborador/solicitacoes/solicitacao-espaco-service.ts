import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

export const StatusSolicitacao = {
  PENDENTE: 'PENDENTE',
  APROVADA: 'APROVADA',
  REPROVADA: 'REPROVADA',
  FINALIZADA: 'FINALIZADA'
} as const;

export type StatusSolicitacao = typeof StatusSolicitacao[keyof typeof StatusSolicitacao];

export interface SolicitacaoReservaRequestDto {
  dataUtilizacao: string; // Formato "YYYY-MM-DD"
  horaInicio: string;     // Formato "HH:mm"
  horaFim: string;        // Formato "HH:mm"
  espacoId: number;
  solicitanteId: number;
}

export interface SolicitacaoReservaResponseDto {
  id: number;
  dataUtilizacao: string;
  horaInicio: string;
  horaFim: string;
  dataSolicitacao: string;
  status: StatusSolicitacao;
  justificativaReprovacao?: string;
  espacoId?: number;
  espacoNome?: string;
  espacoSigla?: string;
  solicitanteId?: number;
  solicitanteNome?: string;
  avaliadorId?: number;
  avaliadorNome?: string;
}

export interface reprovarSolicitacaoReservaDto {
  avaliadorId: number,
  motivo: string
}


@Service()
export class SolicitacaoEspacoService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/solicitacoes-reservas';

  solicitacoes_espaco = signal<SolicitacaoReservaResponseDto[]>([]);

  carregarTodos(): Observable<SolicitacaoReservaResponseDto[]> {
    return this.http.get<SolicitacaoReservaResponseDto[]>(this.apiUrl).pipe(
      tap(dados => this.solicitacoes_espaco.set(dados))
    );
  }

  obterPorId(id: number): Observable<SolicitacaoReservaResponseDto> {
    return this.http.get<SolicitacaoReservaResponseDto>(`${this.apiUrl}/${id}`);
  }

  adicionar(dto: SolicitacaoReservaRequestDto): Observable<SolicitacaoReservaResponseDto> {
    return this.http.post<SolicitacaoReservaResponseDto>(this.apiUrl, dto).pipe(
      tap(nova => this.solicitacoes_espaco.update(lista => [...lista, nova]))
    );
  }

  salvar(id: number, dto: SolicitacaoReservaRequestDto): Observable<SolicitacaoReservaResponseDto> {
    return this.http.put<SolicitacaoReservaResponseDto>(`${this.apiUrl}/${id}`, dto).pipe(
      tap(atualizada => {
        this.solicitacoes_espaco.update(lista =>
          lista.map(item => item.id === atualizada.id ? atualizada : item)
        );
      })
    );
  }

  aprovarSolicitacao(id: number): Observable<SolicitacaoReservaResponseDto> {
    return this.http.put<SolicitacaoReservaResponseDto>(`${this.apiUrl}/${id}/aprovar`, {})
  }

  reprovarSolicitacao(id: number, dto: reprovarSolicitacaoReservaDto): Observable<SolicitacaoReservaResponseDto> {
    return this.http.put<SolicitacaoReservaResponseDto>(`${this.apiUrl}/${id}/reprovar`, dto)
  }

  inativar(id: number): Observable<SolicitacaoReservaResponseDto> {
    return this.http.patch<SolicitacaoReservaResponseDto>(`${this.apiUrl}/${id}/inativar`, {}).pipe(
      tap(solAtualizada => {
        // Atualiza automaticamente o Signal para re-renderizar a tabela sem recarregar a página
        this.solicitacoes_espaco.update(lista =>
          lista.map(item => item.id === solAtualizada.id ? solAtualizada : item)
        );
      })
    );
  }
}

export type solicitacao_espaco = SolicitacaoReservaResponseDto;

