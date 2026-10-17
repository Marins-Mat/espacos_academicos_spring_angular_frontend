import { inject, Service, signal } from '@angular/core';
import { Software } from './software-service';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';


export const TipoEspaco = {
  LABORATORIO: 'LABORATORIO',
  SALA: 'SALA',
  AUDITORIO: 'AUDITORIO',
} as const

export type TipoEspaco = typeof TipoEspaco[keyof typeof TipoEspaco]

export const StatusEspaco = {
  DISPONIVEL: 'DISPONIVEL',
  INDISPONIVEL: 'INDISPONIVEL',
} as const;

export type StatusEspaco = typeof StatusEspaco[keyof typeof StatusEspaco];

export interface Ea {
  id?: number;
  sigla: string;
  nome: string;
  tipo: TipoEspaco;
  descricaoComplementar: string;
  capacidadeMaxima: number;
  localizacao: string;
  centroAcademicoId: number;
  centroAcademicoNome?: string;
  status?: StatusEspaco;
  dataCadastro?: Date;
  softwares?: number[];
  tipoComputadores?: string;
}


@Service()
export class EaService {

  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:8080/api/espacos-academicos'
  private apiUrlLab = 'http://localhost:8080/api/laboratorios'

  listaEas = signal<Ea[]>([])

  carregarTodos(): Observable<Ea[]> {
    return this.http.get<Ea[]>(this.apiUrl).pipe(tap(dados => this.listaEas.set(dados)))
  }

  obterPorId(id: number): Observable<Ea> {
    return this.http.get<Ea>(`${this.apiUrl}/${id}`)
  }

  salvar(eaAtualizado: Ea): Observable<Ea> {
    if (eaAtualizado.tipo === "LABORATORIO") {
      return this.http.put<Ea>(`${this.apiUrlLab}/${eaAtualizado.id}`, eaAtualizado).pipe(tap(eaSalvo => {
        this.listaEas.update(lista => lista.map(item => item.id === eaSalvo.id ? eaSalvo : item))
      }))
    }
    return this.http.put<Ea>(`${this.apiUrl}/${eaAtualizado.id}`, eaAtualizado).pipe(tap(eaSalvo => {
      this.listaEas.update(lista => lista.map(item => item.id === eaSalvo.id ? eaSalvo : item))
    }))
  }

  adicionar(novoEa: Omit<Ea, 'matricula'>, softwareId?: number): Observable<Ea> {
    if (novoEa.tipo === "LABORATORIO") {
      return this.http.post<Ea>(this.apiUrlLab, novoEa).pipe(
        tap(eaCriado => {
          this.listaEas.update(lista => [...lista, eaCriado]);
        }))
    }
    return this.http.post<Ea>(this.apiUrl, novoEa).pipe(
      tap(eaCriado => {
        this.listaEas.update(lista => [...lista, eaCriado]);
      }))
  }

  alterarStatus(id: number): Observable<void> {
    const eaAtual = this.listaEas().find(ea => ea.id === id);

    const acao = eaAtual?.status === 'DISPONIVEL' ? 'inativar' : 'reativar';


    return this.http.patch<void>(`${this.apiUrl}/${id}/${acao}`, {}).pipe(
      tap(() => this.carregarTodos().subscribe())
    )
  }

  obterSoftwares(id: number) {
    return this.obterPorId(id).pipe(map(lab => lab?.softwares ?? []));
  }


  adicionarSoftware(software_id?: number, id?: number) {

    return this.http.post<Software>(`${this.apiUrlLab}/${id}/softwares/${software_id}`, {})
  }

  filtrar(filtroTexto: string, filtroStatus: string): Ea[] {
    const texto = filtroTexto.toLowerCase();
    const status = filtroStatus;

    return this.listaEas().filter(ea => {
      const atendeTexto = ea.nome.toLowerCase().includes(texto);

      const atendeStatus = status === 'Todos' || ea.status == status;

      return atendeTexto && atendeStatus;
    })
  }
}
