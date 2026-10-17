import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StatusCadastro } from '../../usuario-service';
import { Router } from '@angular/router';

export interface Ca {
    id?: number;
    nome: string;
    telefoneCentral: string;
    emailCentral: string;
    nomeCoordenador: string;
    iesId: number;
    iesSigla?: string;
    status?: StatusCadastro;
    dataCadastramento?: Date;
}

@Service()


export class CaService {
    private http = inject(HttpClient)
    private apiUrl = 'http://localhost:8080/api/centros-academicos'
    private router = inject(Router)

    listaCas = signal<Ca[]>([])


    carregarTodas(): Observable<Ca[]> {
        return this.http.get<Ca[]>(this.apiUrl).pipe(tap(dados => this.listaCas.set(dados)))
    }

    obterPorId(id: Number): Observable<Ca> {
        return this.http.get<Ca>(`${this.apiUrl}/${id}`)
    }

    
    salvar(caAtualizada: Ca): Observable<Ca> {
        return this.http.put<Ca>(`${this.apiUrl}/${caAtualizada.id}`, caAtualizada).pipe(tap(caSalvo => {
            this.listaCas.update(lista => lista.map(item => item.id === caSalvo.id ? caSalvo : item))
        }))
    }

    adicionar(novoCa: Omit<Ca, 'id'>): Observable<Ca> {
        return this.http.post<Ca>(this.apiUrl, novoCa).pipe(
            tap(caCriado => {
                this.listaCas.update(lista => [...lista, caCriado]);
            }))
    }

    alterarStatus(id: number): Observable<void> {
        const caAtual = this.listaCas().find(ca => ca.id === id);

        const acao = caAtual?.status === 'ATIVO' ? 'inativar' : 'reativar';


        return this.http.patch<void>(`${this.apiUrl}/${id}/${acao}`, {}).pipe(
            tap(() => this.carregarTodas().subscribe())
        )
    }

    filtrar(filtroTexto: string, filtroStatus: string): Ca[] {
        const texto = filtroTexto.toLowerCase();
        const status = filtroStatus;

        return this.listaCas().filter(ca => {
            const atendeTexto = ca.nome.toLowerCase().includes(texto);

            const atendeStatus = status === 'Todos' || ca.status == status;

            return atendeTexto && atendeStatus;
        })
    }
}
