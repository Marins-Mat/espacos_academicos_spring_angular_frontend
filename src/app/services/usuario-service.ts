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
    id?: number,
    matricula: string,
    nomeCompleto: string,
    email: string,
    senha?: string,
    telefone: string,
    centroAcademicoId: number,
    centroAcademicoNome?: string,
    perfis: PerfilAcesso[],
    dataCadastramento?: Date,
    status?: StatusCadastro,
    motivoInativacao?: string,
}


@Service()
export class UsuarioService { 
    
}
