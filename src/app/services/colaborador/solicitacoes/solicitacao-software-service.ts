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
    justificativa?: string;
    id_avaliador?: number;

}

@Service()
export class SolicitacaoSoftwareService {

    solicitacoes_software = signal<solicitacao_software[]>([
        {
            id: 1,
            id_software: 1,
            id_solicitante: 20260001,
            id_laboratorio: 1,
            objetivo: "Aulas de programação web no semestre",
            status: "APROVADA",
            data_solicitacao: new Date(2026, 2, 3),
            id_avaliador: 1
        },
        {
            id: 2,
            id_software: 3,
            id_solicitante: 20260002,
            id_laboratorio: 1,
            objetivo: "Prática de modelagem e consultas SQL",
            status: "PENDENTE",
            data_solicitacao: new Date(2026, 2, 8)
        },
        {
            id: 3,
            id_software: 4,
            id_solicitante: 20260006,
            id_laboratorio: 2,
            objetivo: "Análise de pacotes nas aulas de redes",
            status: "APROVADA",
            data_solicitacao: new Date(2026, 2, 9),
            id_avaliador: 1
        },
        {
            id: 4,
            id_software: 5,
            id_solicitante: 20260007,
            id_laboratorio: 6,
            objetivo: "Simulação de sistemas de controle",
            status: "REPROVADA",
            data_solicitacao: new Date(2026, 2, 10),
            justificativa: "Instituição não possui licença do software para este laboratório",
            id_avaliador: 2
        },
        {
            id: 5,
            id_software: 2,
            id_solicitante: 20260003,
            id_laboratorio: 1,
            objetivo: "Desenvolvimento Java com Spring em projetos da disciplina",
            status: "PENDENTE",
            data_solicitacao: new Date(2026, 2, 11)
        }
    ])


    obterPorId(id: number) : solicitacao_software | undefined{
        return this.solicitacoes_software().find(sol => sol.id === id);
    }
    
}
