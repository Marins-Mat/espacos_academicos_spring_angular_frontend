import { Service, signal } from '@angular/core';

export interface Ca {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    coordenador: string;
    IesVinculada: string;
    status: 'Ativa' | 'Inativa';
}

@Service()


export class CaService {

    listaCas = signal<Ca[]>([
        {
            id: 1,
            nome: "Escola de Educação (CEDU)",
            telefone: "(71) 3203-0001",
            email: "cedu@exemplo.ucsal.br",
            coordenador: "Ana Beatriz Souza",
            IesVinculada: "UCSAL",
            status: "Ativa"
        },
        {
            id: 2,
            nome: "Cultura e Humanidades (CHUM)",
            telefone: "(71) 3203-0002",
            email: "chum@exemplo.ucsal.br",
            coordenador: "Carlos Eduardo Lima",
            IesVinculada: "UCSAL",
            status: "Ativa"
        },
        {
            id: 3,
            nome: "Escola de Ciências Sociais e Aplicadas (CCSA)",
            telefone: "(71) 3203-0003",
            email: "ccsa@exemplo.ucsal.br",
            coordenador: "Mariana Costa Ribeiro",
            IesVinculada: "UCSAL",
            status: "Ativa"
        },
        {
            id: 4,
            nome: "Escola de Engenharias e Ciências Tecnológicas (CCET)",
            telefone: "(71) 3203-0004",
            email: "ccet@exemplo.ucsal.br",
            coordenador: "Roberto Almeida Santos",
            IesVinculada: "UCSAL",
            status: "Ativa"
        }
    ])

    obterPorId(id: Number): Ca | undefined {
        return this.listaCas().find(ca => ca.id===id);
    }

    salvar(caAtualizada: Ca) {
            this.listaCas.update(listaCas => this.listaCas().map(ca => ca.id === caAtualizada.id ? caAtualizada : ca))
        }
    
        adicionar(novoCa: Omit<Ca, 'id'>) {
            const novoId = this.listaCas().length + 1;
            this.listaCas.update(listaCas => [...listaCas, { ...novoCa, id: novoId }])
        }
    
        alterarStatus(id: number) {
            this.listaCas.update(listaCas => listaCas.map(ca => ca.id === id ? { ...ca, status: ca.status === 'Ativa' ? 'Inativa' : 'Ativa' } : ca))
        }

    filtrar(filtroTexto: string, filtroStatus: string) : Ca[] {
        const texto = filtroTexto.toLowerCase();
        const status = filtroStatus;

        return this.listaCas().filter(ca => {
            const atendeTexto = ca.nome.toLowerCase().includes(texto);

            const atendeStatus = status === 'Todos' || ca.status == status;

            return atendeTexto && atendeStatus;
        })
    }




}
