import { Service } from '@angular/core';

export const PerfilAcesso = {
    ADMINISTRADOR: 'ADMINISTRADOR',
    COLABORADOR: 'COLABORADOR',
    USUARIO: 'USUARIO'
} as const

export type PerfilAcesso = typeof PerfilAcesso[keyof typeof PerfilAcesso]

export const StatusCadastro = {
    ATIVO: 'ATIVO',
    INATIVO: 'INATIVO'
} as const

export type StatusCadastro = typeof StatusCadastro[keyof typeof StatusCadastro]


export interface Usuario {
    id: number,
    matricula: string,
    nome: string,
    email: string,
    telefone: string,
    DataCadastramento: Date,
    status: StatusCadastro,
    motivoInativacao?: string,
    ca_id: number,
    ca_nome: string,
    perfis: PerfilAcesso[]
}


@Service()
export class UsuarioService { }
