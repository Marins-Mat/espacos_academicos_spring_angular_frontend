import { inject, Service, signal } from '@angular/core';
import { StatusCadastro } from '../../usuario-service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

export const Turno = {
    MATUTINO: 'MATUTINO',
    VESPERTINO: 'VESPERTINO',
    NOTURNO: 'NOTURNO',
    INTEGRAL: 'INTEGRAL'
} as const

export type Turno = typeof Turno[keyof typeof Turno]


export interface Curso {
    id?: number;
    sigla: string;
    descricao: string;
    centroAcademicoId: number;
    centroAcademicoNome: string;
    nomeCoordenador: string;
    turno: Turno;
    status?: StatusCadastro;
    dataCadastramento?: Date;
}

@Service()
export class CursoService {
    private http = inject(HttpClient)
    private apiUrl = 'http://localhost:8080/api/cursos'
    private router = inject(Router)


    listaCurso = signal<Curso[]>([])

    carregarTodos(): Observable<Curso[]> {
        return this.http.get<Curso[]>(this.apiUrl).pipe(tap(dados => this.listaCurso.set(dados)))
    }

    obterPorId(id: Number): Observable<Curso> {
        return this.http.get<Curso>(`${this.apiUrl}/${id}`)
    }

    salvar(cursoAtualizado: Curso): Observable<Curso> {
        return this.http.put<Curso>(`${this.apiUrl}/${cursoAtualizado.id}`, cursoAtualizado).pipe(tap(cursoSalvo => {
            this.listaCurso.update(lista => lista.map(item => item.id === cursoSalvo.id ? cursoSalvo : item))
        }))
    }

    adicionar(novoCurso: Omit<Curso, 'id'>): Observable<Curso> {
        return this.http.post<Curso>(this.apiUrl, novoCurso).pipe(
            tap(cursoCriado => {
                this.listaCurso.update(lista => [...lista, cursoCriado]);
            }))

    }

    alterarStatus(id: number): Observable<void> {

        const cursoAtual = this.listaCurso().find(curso => curso.id === id);

        const acao = cursoAtual?.status === 'ATIVO' ? 'inativar' : 'reativar';


        return this.http.patch<void>(`${this.apiUrl}/${id}/${acao}`, {}).pipe(
            tap(() => this.carregarTodos().subscribe())
        )
    }

    filtrar(filtroTexto: string, filtroStatus: string): Curso[] {
        const texto = filtroTexto.toLowerCase();
        const status = filtroStatus;

        return this.listaCurso().filter(curso => {
            const atendeTexto = curso.sigla.toLowerCase().includes(texto);

            const atendeStatus = status === 'Todos' || curso.status == status;

            return atendeTexto && atendeStatus;
        })
    }




}
