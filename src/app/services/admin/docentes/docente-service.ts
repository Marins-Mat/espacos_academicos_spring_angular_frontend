import { Service, signal } from '@angular/core';

export interface Docente {
    matricula: number;
    nome: string;
    email: string;
    telefone: string;
    caVinculada: string;
    status: 'Ativo' | 'Inativo';
    dataCadastro: Date;
}


@Service()
export class DocenteService {
    listaDocentes = signal<Docente[]>([
        {
            matricula: 20260001,
            nome: "Roberto Almeida Santos",
            email: "roberto.santos@exemplo.ucsal.br",
            telefone: "(71) 99100-0001",
            caVinculada: "CCET",
            status: "Ativo",
            dataCadastro: new Date(2026, 2, 10)
        },
        {
            matricula: 20260002,
            nome: "Lucas Gabriel Nogueira",
            email: "lucas.nogueira@exemplo.ucsal.br",
            telefone: "(71) 99100-0002",
            caVinculada: "CCET",
            status: "Ativo",
            dataCadastro: new Date(2026, 2, 10)
        },
        {
            matricula: 20260003,
            nome: "Helena Martins Barreto",
            email: "helena.barreto@exemplo.ucsal.br",
            telefone: "(71) 99100-0003",
            caVinculada: "CCET",
            status: "Ativo",
            dataCadastro: new Date(2026, 2, 12)
        },
        {
            matricula: 20260004,
            nome: "Ana Beatriz Souza",
            email: "ana.souza@exemplo.ucsal.br",
            telefone: "(71) 99100-0004",
            caVinculada: "CEDU",
            status: "Ativo",
            dataCadastro: new Date(2026, 2, 12)
        },
        {
            matricula: 20260005,
            nome: "Mariana Costa Ribeiro",
            email: "mariana.ribeiro@exemplo.ucsal.br",
            telefone: "(71) 99100-0005",
            caVinculada: "CCSA",
            status: "Ativo",
            dataCadastro: new Date(2026, 2, 14)
        }
    ])

    obterPorId(matricula: Number): Docente | undefined {
        return this.listaDocentes().find(docente => docente.matricula === matricula);
    }

    salvar(docenteAtualizado: Docente) {
        this.listaDocentes.update(listaDocentes => this.listaDocentes().map(docente => docente.matricula === docenteAtualizado.matricula ? docenteAtualizado : docente))
    }

    adicionar(novoDocente: Omit<Docente, 'matricula'>) {
        const novaMatricula = this.listaDocentes().length + 1;
        this.listaDocentes.update(listaDocentes => [...listaDocentes, { ...novoDocente, matricula: novaMatricula }])
    }

    alterarStatus(matricula: number) {
        this.listaDocentes.update(listaDocentes => listaDocentes.map(docente => docente.matricula === matricula ? { ...docente, status: docente.status === 'Ativo' ? 'Inativo' : 'Ativo' } : docente))
    }

    filtrar(filtroTexto: string, filtroStatus: string): Docente[] {
        const texto = filtroTexto.toLowerCase();
        const status = filtroStatus;

        return this.listaDocentes().filter(docente => {
            const atendeTexto = docente.nome.toLowerCase().includes(texto);

            const atendeStatus = status === 'Todos' || docente.status == status;

            return atendeTexto && atendeStatus;
        })
    }
}
