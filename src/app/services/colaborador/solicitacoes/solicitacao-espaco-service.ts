import { Service, signal } from '@angular/core';

export const status_solicitacao_espaco = {
  PENDENTE: 'PENDENTE',
  APROVADA: 'APROVADA',
  REPROVADA: 'REPROVADA',
  FINALIZADA: 'FINALIZADA'
} as const

export type status_solicitacao_espaco = typeof status_solicitacao_espaco[keyof typeof status_solicitacao_espaco]


export interface solicitacao_espaco {
  id: number;
  id_espaco: number;
  id_solicitante: number;
  inicio: Date;
  fim: Date;
  data_solicitacao: Date;
  status: status_solicitacao_espaco;
}


@Service()
export class SolicitacaoEspacoService {

  solicitacoes_espaco = signal<solicitacao_espaco[]>([
    {
      id: 1,
      id_espaco: 1,
      id_solicitante: 20260001,
      inicio: new Date(2026, 2, 13, 7, 0),
      fim: new Date(2026, 2, 13, 9, 30),
      data_solicitacao: new Date(2026, 2, 5),
      status: "APROVADA"
    },
    {
      id: 2,
      id_espaco: 1,
      id_solicitante: 20260002,
      inicio: new Date(2026, 2, 13, 8, 0),
      fim: new Date(2026, 2, 13, 10, 0),
      data_solicitacao: new Date(2026, 2, 6),
      status: "REPROVADA"
    },
    {
      id: 3,
      id_espaco: 3,
      id_solicitante: 20260003,
      inicio: new Date(2026, 2, 14, 10, 0),
      fim: new Date(2026, 2, 14, 12, 0),
      data_solicitacao: new Date(2026, 2, 8),
      status: "PENDENTE"
    },
    {
      id: 4,
      id_espaco: 5,
      id_solicitante: 20260004,
      inicio: new Date(2026, 2, 15, 19, 0),
      fim: new Date(2026, 2, 15, 21, 0),
      data_solicitacao: new Date(2026, 2, 9),
      status: "APROVADA"
    },
    {
      id: 5,
      id_espaco: 2,
      id_solicitante: 20260006,
      inicio: new Date(2026, 2, 16, 14, 0),
      fim: new Date(2026, 2, 16, 16, 0),
      data_solicitacao: new Date(2026, 2, 10),
      status: "REPROVADA"
    },
    {
      id: 6,
      id_espaco: 4,
      id_solicitante: 20260005,
      inicio: new Date(2026, 2, 17, 8, 0),
      fim: new Date(2026, 2, 17, 10, 0),
      data_solicitacao: new Date(2026, 2, 11),
      status: "PENDENTE"
    }
  ])

}
