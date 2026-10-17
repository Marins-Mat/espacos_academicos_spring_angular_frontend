import { inject, Service, signal } from '@angular/core';
import { StatusCadastro, Usuario } from '../../usuario-service';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Service()
export class DocenteService {
    private http = inject(HttpClient)
    private apiUrl = 'http://localhost:8080/api/usuarios'

    listaDocentes = signal<Usuario[]>([])

    carregarTodos(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.apiUrl).pipe(tap(dados => this.listaDocentes.set(dados)))
    }

    obterPorId(id: Number): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.apiUrl}/${id}`)
    }

    salvar(docenteAtualizado: Usuario) : Observable<Usuario> {
        return this.http.put<Usuario>(`${this.apiUrl}/${docenteAtualizado.id}`, docenteAtualizado).pipe(tap(docenteSalvo => {
                    this.listaDocentes.update(lista => lista.map(item => item.id === docenteSalvo.id ? docenteSalvo : item))
                }))
    }

    adicionar(novoDocente: Omit<Usuario, 'matricula'>): Observable<Usuario>   {
        return this.http.post<Usuario>(this.apiUrl, novoDocente).pipe(
                    tap(docenteCriado => {
                        this.listaDocentes.update(lista => [...lista, docenteCriado]);
                    }))
    }

    alterarStatus(id: number): Observable<void> {

        const cursoAtual = this.listaDocentes().find(docente => docente.id === id);

        const acao = cursoAtual?.status === 'ATIVO' ? 'inativar' : 'reativar';


        return this.http.patch<void>(`${this.apiUrl}/${id}/${acao}`, {}).pipe(
            tap(() => this.carregarTodos().subscribe())
        )
    }

    filtrar(filtroTexto: string, filtroStatus: string): Usuario[] {
        const texto = filtroTexto.toLowerCase();
        const status = filtroStatus;

        return this.listaDocentes().filter(docente => {
            const atendeTexto = docente.nomeCompleto.toLowerCase().includes(texto);

            const atendeStatus = status === 'Todos' || docente.status == status;

            return atendeTexto && atendeStatus;
        })
    }
}
