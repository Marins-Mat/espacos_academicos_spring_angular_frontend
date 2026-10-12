import { Service, signal } from '@angular/core';


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
  id: number;
  sigla: string;
  nome: string;
  tipo: TipoEspaco;
  descricao: string;
  capacidadeMax: number;
  localizacao: string;
  status: StatusEspaco;
  dataDeCadastramento: Date;
}
    

@Service()
export class EaService {
    listaEas = signal<Ea[]>([
        {
    id: 1,
    sigla: "LAB-INF-01",
    nome: "Laboratório de Informática 1",
    tipo: 'LABORATORIO',
    descricao: "Laboratório com 30 computadores para aulas de programação",
    capacidadeMax: 30,
    localizacao: "Bloco A, 1º andar",
    status: 'DISPONIVEL',
    dataDeCadastramento: new Date(2026, 2, 10)
  },
  {
    id: 2,
    sigla: "LAB-INF-02",
    nome: "Laboratório de Informática 2",
    tipo: 'LABORATORIO',
    descricao: "Laboratório de redes e infraestrutura",
    capacidadeMax: 25,
    localizacao: "Bloco A, 1º andar",
    status: 'INDISPONIVEL',
    dataDeCadastramento: new Date(2026, 2, 10)
  },
  {
    id: 3,
    sigla: "SL-101",
    nome: "Sala 101",
    tipo: 'SALA',
    descricao: "Sala de aula com projetor e ar-condicionado",
    capacidadeMax: 40,
    localizacao: "Bloco B, térreo",
    status: 'DISPONIVEL',
    dataDeCadastramento: new Date(2026, 2, 12)
  },
  {
    id: 4,
    sigla: "SL-205",
    nome: "Sala 205",
    tipo: 'SALA',
    descricao: "Sala de aula com quadro branco e 50 carteiras",
    capacidadeMax: 50,
    localizacao: "Bloco B, 2º andar",
    status: 'DISPONIVEL',
    dataDeCadastramento: new Date(2026, 2, 12)
  },
  {
    id: 5,
    sigla: "AUD-01",
    nome: "Auditório Principal",
    tipo: 'AUDITORIO',
    descricao: "Auditório para palestras, defesas e eventos institucionais",
    capacidadeMax: 200,
    localizacao: "Bloco C, térreo",
    status: 'DISPONIVEL',
    dataDeCadastramento: new Date(2026, 2, 14)
  },
  {
    id: 6,
    sigla: "LAB-ENG-01",
    nome: "Laboratório de Automação",
    tipo: 'LABORATORIO',
    descricao: "Laboratório com bancadas de controle e automação",
    capacidadeMax: 20,
    localizacao: "Bloco D, 1º andar",
    status: 'INDISPONIVEL',
    dataDeCadastramento: new Date(2026, 2, 15)
  }
    ])

    obterPorId(id: Number): Ea | undefined {
        return this.listaEas().find(ea => ea.id === id);
    }

    salvar(eaAtualizada: Ea) {
        this.listaEas.update(listaEas => this.listaEas().map(ea => ea.id === eaAtualizada.id ? eaAtualizada : ea))
    }

    adicionar(novoEa: Omit<Ea, 'id'>) {
        const novoId = this.listaEas().length + 1;
        this.listaEas.update(listaEas => [...listaEas, { ...novoEa, id: novoId }])
    }

    alterarStatus(id: number) {
        this.listaEas.update(listaEas => listaEas.map(ea => ea.id === id ? { ...ea, status: ea.status === 'DISPONIVEL' ? 'INDISPONIVEL' : 'DISPONIVEL' } : ea))
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
