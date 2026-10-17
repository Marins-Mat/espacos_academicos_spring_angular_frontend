import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

export const TipoSoftware = {
    SOFTWARE_LIVRE: 'SOFTWARE_LIVRE',
    SOFTWARE_PROPRIETARIO: 'SOFTWARE_PROPRIETARIO'
} as const;

export type TipoSoftware = typeof TipoSoftware[keyof typeof TipoSoftware]

export interface Software {
    id?: number;
    url: string;
    nome: string;
    tipo: TipoSoftware;
    objetivo: string;
    disciplinas: string;
}

@Service()
export class SoftwareService {
    private http = inject(HttpClient)
    private apiUrl = 'http://localhost:8080/api/softwares'

    listaSofts = signal<Software[]>([])

    carregarTodos(): Observable<Software[]> {
        return this.http.get<Software[]>(this.apiUrl).pipe(tap(dados => this.listaSofts.set(dados)))
    }

    obterPorId(id: number): Observable<Software> {
        return this.http.get<Software>(`${this.apiUrl}/${id}`)
    }

    salvar(softAtualizado: Software): Observable<Software> {
        return this.http.put<Software>(`${this.apiUrl}/${softAtualizado.id}`, softAtualizado).pipe(tap(softSalvo => {
            this.listaSofts.update(lista => lista.map(item => item.id === softSalvo.id ? softSalvo : item))
        }))
    }

    adicionar(novoSoft: Software): Observable<Software> {
        return this.http.post<Software>(this.apiUrl, novoSoft).pipe(
            tap(softCriado => {
                this.listaSofts.update(lista => [...lista, softCriado]);
            }))
    }

}
