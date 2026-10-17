import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

export const StatusSolicitacaoSoftware = {
    PENDENTE: 'PENDENTE',
    APROVADA: 'APROVADA',
    REPROVADA: 'REPROVADA'
} as const;

export type StatusSolicitacaoSoftware = typeof StatusSolicitacaoSoftware[keyof typeof StatusSolicitacaoSoftware];

export interface SolicitacaoSoftwareRequestDto {
    laboratorioId: number;
    softwareId: number;
    solicitanteId: number;
    justificativaUso: string;
    disciplina?: string;
    dataLimiteNecessidade?: string; // Formato "YYYY-MM-DD"
}

export interface ReprovarSolicitacaoSoftwareDto {
    avaliadorId: number;
    justificativaReprovacao: string;
}

export interface SolicitacaoSoftwareResponseDto {
    id: number;
    dataHoraSolicitacao: string; 
    status: StatusSolicitacaoSoftware;
    justificativaReprovacao?: string;
    laboratorioId?: number;
    laboratorioNome?: string;
    laboratorioSigla?: string;
    softwareId?: number;
    softwareNome?: string;
    solicitanteId?: number;
    solicitanteNome?: string;
    avaliadorId?: number;
    avaliadorNome?: string;
}

// Alias retrocompatível com componentes que usam o nome antigo
export type solicitacao_software = SolicitacaoSoftwareResponseDto;

@Service()
export class SolicitacaoSoftwareService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/solicitacoes-softwares';

    solicitacoes_software = signal<SolicitacaoSoftwareResponseDto[]>([]);

    carregarTodas(status?: StatusSolicitacaoSoftware): Observable<SolicitacaoSoftwareResponseDto[]> {
        let params = new HttpParams();
        if (status) {
            params = params.set('status', status);
        }

        return this.http.get<SolicitacaoSoftwareResponseDto[]>(this.apiUrl, { params }).pipe(
            tap(dados => this.solicitacoes_software.set(dados))
        );
    }

    obterPorId(id: number): Observable<SolicitacaoSoftwareResponseDto> {
        return this.http.get<SolicitacaoSoftwareResponseDto>(`${this.apiUrl}/${id}`);
    }

    solicitar(dto: SolicitacaoSoftwareRequestDto): Observable<SolicitacaoSoftwareResponseDto> {
        return this.http.post<SolicitacaoSoftwareResponseDto>(this.apiUrl, dto).pipe(
            tap(nova => this.solicitacoes_software.update(lista => [...lista, nova]))
        );
    }

    aprovar(id: number, avaliadorId: number): Observable<SolicitacaoSoftwareResponseDto> {
        const params = new HttpParams().set('avaliadorId', avaliadorId);
        return this.http.patch<SolicitacaoSoftwareResponseDto>(`${this.apiUrl}/${id}/aprovar`, {}, { params }).pipe(
            tap(atualizada => {
                this.solicitacoes_software.update(lista =>
                    lista.map(item => item.id === atualizada.id ? atualizada : item)
                );
            })
        );
    }

    reprovar(id: number, dto: ReprovarSolicitacaoSoftwareDto): Observable<SolicitacaoSoftwareResponseDto> {
        return this.http.patch<SolicitacaoSoftwareResponseDto>(`${this.apiUrl}/${id}/reprovar`, dto).pipe(
            tap(atualizada => {
                this.solicitacoes_software.update(lista =>
                    lista.map(item => item.id === atualizada.id ? atualizada : item)
                );
            })
        );
    }
}
