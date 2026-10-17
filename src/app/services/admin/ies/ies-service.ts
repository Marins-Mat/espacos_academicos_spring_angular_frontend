import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { proreitoriaResponse } from '../proreitoria/reitoria';
import { StatusCadastro } from '../../usuario-service';

export interface Ies {
    id?: number;
    sigla: string;
    nome: string;
    emailCentral: string;
    telefoneCentral: string;
    nomeReitor: string;
    dataCadastramento?: Date;
    status?: StatusCadastro;
    proReitorias: proreitoriaResponse[]
}

@Service()

export class IesService {

    private http = inject(HttpClient)
    private apiUrl = 'http://localhost:8080/api/ies'


    listaIes = signal<Ies[]>([])

    carregarTodas(): Observable<Ies[]> {
        return this.http.get<Ies[]>(this.apiUrl).pipe(tap(dados => this.listaIes.set(dados)))
    }

    obterPorId(id: number): Observable<Ies> {
        return this.http.get<Ies>(`${this.apiUrl}/${id}`)
    }

    salvar(iesAtualizada: Ies): Observable<Ies> {
        console.log(iesAtualizada)
        return this.http.put<Ies>(`${this.apiUrl}/${iesAtualizada.id}`, iesAtualizada).pipe(tap(iesSalvo => {
            this.listaIes.update(lista => lista.map(item => item.id === iesSalvo.id ? iesSalvo : item))
        }))
    }

    adicionar(novaIes: Ies): Observable<Ies> {
        return this.http.post<Ies>(this.apiUrl, novaIes).pipe(
            tap(caCriado => {
                this.listaIes.update(lista => [...lista, caCriado]);
            }))
    }

    alterarStatus(id: number): Observable<void> {
        const iesAtual = this.listaIes().find(ies => ies.id === id);

        const acao = iesAtual?.status === 'ATIVO' ? 'inativar' : 'reativar';

        return this.http.patch<void>(`${this.apiUrl}/${id}/${acao}`, {}).pipe(
            tap(() => this.carregarTodas().subscribe())
        );
    }

    filtrar(filtroTexto: string, filtroStatus: string): Ies[] {
        const texto = filtroTexto.toLowerCase();
        const status = filtroStatus;

        return this.listaIes().filter(ies => {

            const atendeTexto = ies.sigla.toLowerCase().includes(texto) || ies.nome.toLowerCase().includes(texto);

            const atendeStatus = status === 'Todos' || ies.status == status;

            return atendeTexto && atendeStatus;
        })
    }
}
