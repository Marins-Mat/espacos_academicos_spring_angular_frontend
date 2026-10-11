import { Injectable, signal } from '@angular/core';

export interface Ies {
    id: number;
    sigla: string;
    nome: string;
    reitor: string;
    telefone: string;
    email: string;
    status: 'Ativa' | 'Inativa';
    data: Date;
}

@Injectable({
    providedIn: 'root' // Disponível na aplicação inteira
})

export class IesService {

    listaIes = signal<Ies[]>([
        { id: 1, sigla: 'UCSAL', nome: 'Universidade Católica do Salvador', reitor: 'Dr. Silva', email: 'contato@ucsal.br', telefone: '71 9 xxxxxxxx',  status: 'Ativa', data: new Date(2012, 10, 4)},
        { id: 2, sigla: 'UCB', nome: 'Universidade Católica de Brasília', reitor: 'Dra. Maria', email: 'contato@ucb.br', telefone: '71 9 xxxxxxxx',status: 'Ativa', data: new Date(2026, 5, 7) },
        { id: 3, sigla: 'PUC-Rio', nome: 'Pontifícia Universidade Católica do Rio de Janeiro', reitor: 'Dr. João', email: 'contato@puc-rio.br', telefone: '71 9 xxxxxxxx', status: 'Inativa', data: new Date(2003, 9, 10)}
    ])

    obterPorId(id: number): Ies | undefined {
        return this.listaIes().find(item => item.id === id);
    }

    salvar(iesAtualizada: Ies) {
        this.listaIes.update(listaIes => this.listaIes().map(item => item.id === iesAtualizada.id ? iesAtualizada : item))
    }

    adicionar(novaIes: Omit<Ies, 'id'>) {
        const novoId = this.listaIes().length + 1;
        this.listaIes.update(listaIes => [...listaIes, { ...novaIes, id: novoId }])
    }

    alterarStatus(id: number) {
        this.listaIes.update(listaIes => listaIes.map(item => item.id === id ? { ...item, status: item.status === 'Ativa' ? 'Inativa' : 'Ativa' } : item))
    }

    filtrar(filtroTexto: string, filtroStatus: string): Ies[] {
        const texto = filtroTexto.toLowerCase();
        const status = filtroStatus;

        return this.listaIes().filter(ies => {
            
            const atendeTexto = ies.sigla.toLowerCase().includes(texto) || ies.nome.toLowerCase().includes(texto);

            const atendeStatus = status === 'Todos' || ies.status == status;

            return atendeTexto && atendeStatus;
        })
    }
}
