import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface Log {
    id: number;
    dataHora: Date;
    acao: string;
    entidade: string;
    usuarioId: number;
    usuarioNome: string;
    matricula: string;
}
@Service()
export class AuditoriaService {
    private http = inject(HttpClient)
    private apiUrl = 'http://localhost:8080/api/logs'

    listaLogs = signal<Log[]>([])

    carregarTodos(): Observable<Log[]> {
            return this.http.get<Log[]>(this.apiUrl).pipe(tap(dados => this.listaLogs.set(dados)))
        }

}
