import { Service, signal } from '@angular/core';

export const status_solicitacao_software = {
    APROVADA: 'APROVADA',
    PENDENTE: 'PENDENTE',
    REPROVADA: 'REPROVADA'
} as const

export type status_solicitacao_software = typeof status_solicitacao_software[keyof typeof status_solicitacao_software]

export interface solicitacao_software {
    id: number;
    id_software: number;
    id_solicitante: number;
    id_laboratorio: number;
    objetivo: string;
    status: status_solicitacao_software
    data_solicitacao: Date;
}

@Service()
export class SolicitacaoSoftwareService {

    solicitacoes_software = signal<solicitacao_software[]>([
        {
            id: 1,
            id_software: 1,
            id_solicitante: 20260001,
            id_laboratorio: 1,
            objetivo: "Usar o editor nas aulas práticas de programação web",
            status: "APROVADA",
            data_solicitacao: new Date(2026, 2, 5)
        },
        {
            id: 2,
            id_software: 2,
            id_solicitante: 20260002,
            id_laboratorio: 1,
            objetivo: "Desenvolver a API em Java e Spring durante as aulas",
            status: "PENDENTE",
            data_solicitacao: new Date(2026, 2, 8)
        },
        {
            id: 3,
            id_software: 3,
            id_solicitante: 20260003,
            id_laboratorio: 1,
            objetivo: "Praticar modelagem e consultas SQL em sala",
            status: "APROVADA",
            data_solicitacao: new Date(2026, 2, 9)
        },
        {
            id: 4,
            id_software: 4,
            id_solicitante: 20260006,
            id_laboratorio: 2,
            objetivo: "Capturar e analisar pacotes nas aulas de redes",
            status: "PENDENTE",
            data_solicitacao: new Date(2026, 2, 10)
        },
        {
            id: 5,
            id_software: 5,
            id_solicitante: 20260006,
            id_laboratorio: 6,
            objetivo: "Simular sistemas de controle nas aulas de automação",
            status: "REPROVADA",
            data_solicitacao: new Date(2026, 2, 11)
        }
    ])
}
