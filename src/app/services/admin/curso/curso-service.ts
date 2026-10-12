import { Service, signal } from '@angular/core';

export interface Curso {
    id: number;
    sigla: string;
    descricao: string;
    caVinculada: string;
    coordenador: string;
    turnos: Boolean[];
    status: 'Ativo' | 'Inativo';
    dataCadastro: Date;
}

@Service()
export class CursoService {

    listaCurso = signal<Curso[]>([
        {
            id: 1,
            sigla: "BES",
            descricao: "Bacharelado em Engenharia de Software",
            caVinculada: "CCET",
            coordenador: "Roberto Almeida Santos",
            turnos: [true, true, false],
            dataCadastro: new Date(2026, 3, 10),
            status: "Ativo"
        },
        {
            id: 2,
            sigla: "DIR",
            descricao: "Direito",
            caVinculada: "CCET",
            coordenador: "Helena Martins Barreto",
            turnos: [true, true, false],
            dataCadastro: new Date(2026, 3, 10),
            status: "Ativo"
        },
        {
            id: 3,
            sigla: "ADS",
            descricao: "Tecnológico em Análise e Desenvolvimento de Sistemas",
            caVinculada: "CCET",
            coordenador: "Lucas Gabriel Nogueira",
            turnos: [false, false, true],
            dataCadastro: new Date(2026, 3, 12),
            status: "Ativo"
        },
        {
            id: 4,
            sigla: "CC",
            descricao: "Ciência da Computação",
            caVinculada: "CTC",
            coordenador: "Paulo Henrique Duarte",
            turnos: [true, true, false],
            dataCadastro: new Date(2026, 3, 15),
            status: "Ativo"
        },
        {
            id: 5,
            sigla: "ECA",
            descricao: "Engenharia de Controle e Automação",
            caVinculada: "CTC",
            coordenador: "Renata Vasconcelos Lopes",
            turnos: [true, false, false],
            dataCadastro: new Date(2026, 3, 15),
            status: "Inativo"
        }
    ])

    obterPorId(id: Number): Curso | undefined {
        return this.listaCurso().find(curso => curso.id === id);
    }

    salvar(cursoAtualizado: Curso) {
        this.listaCurso.update(listaCurso => this.listaCurso().map(curso => curso.id === cursoAtualizado.id ? cursoAtualizado : curso))
    }

    adicionar(novoCurso: Omit<Curso, 'id'>) {
        const novoId = this.listaCurso().length + 1;
        this.listaCurso.update(listaCurso => [...listaCurso, { ...novoCurso, id: novoId }])
    }

    alterarStatus(id: number) {
        this.listaCurso.update(listaCurso => listaCurso.map(curso => curso.id === id ? { ...curso, status: curso.status === 'Ativo' ? 'Inativo' : 'Ativo' } : curso))
    }

    filtrar(filtroTexto: string, filtroStatus: string): Curso[] {
        const texto = filtroTexto.toLowerCase();
        const status = filtroStatus;

        return this.listaCurso().filter(curso => {
            const atendeTexto = curso.sigla.toLowerCase().includes(texto);

            const atendeStatus = status === 'Todos' || curso.status == status;

            return atendeTexto && atendeStatus;
        })
    }




}
