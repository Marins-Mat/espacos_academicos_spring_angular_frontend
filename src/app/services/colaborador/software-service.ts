import { Service, signal } from '@angular/core';

export const TipoSoftware = {
    SOFTWARE_LIVRE: 'SOFTWARE_LIVRE',
    SOFTWARE_PROPRIETARIO: 'SOFTWARE_PROPRIETARIO'
} as const;

export type TipoSoftware = typeof TipoSoftware[keyof typeof TipoSoftware]

export interface Software {
    id: number;
    url: string;
    nome: string;
    tipo: TipoSoftware;
    objetivo: string;
    disciplinas: string;
}

@Service()
export class SoftwareService {

    listaSofts = signal<Software[]>([
        {
            id: 1,
            url: "https://code.visualstudio.com/download",
            nome: "Visual Studio Code",
            tipo: "SOFTWARE_LIVRE",
            objetivo: "Editor de código para aulas de programação",
            disciplinas: "Programação Web, Algoritmos"
        },
        {
            id: 2,
            url: "https://www.jetbrains.com/idea/download",
            nome: "IntelliJ IDEA Ultimate",
            tipo: "SOFTWARE_PROPRIETARIO",
            objetivo: "IDE para desenvolvimento Java e Spring",
            disciplinas: "Programação Orientada a Objetos, Desenvolvimento Back-End"
        },
        {
            id: 3,
            url: "https://www.postgresql.org/download/",
            nome: "PostgreSQL",
            tipo: "SOFTWARE_LIVRE",
            objetivo: "Banco de dados relacional para aulas de modelagem e SQL",
            disciplinas: "Banco de Dados"
        },
        {
            id: 4,
            url: "https://www.wireshark.org/download.html",
            nome: "Wireshark",
            tipo: "SOFTWARE_LIVRE",
            objetivo: "Análise de tráfego de rede",
            disciplinas: "Redes de Computadores"
        },
        {
            id: 5,
            url: "https://www.mathworks.com/products/matlab.html",
            nome: "MATLAB",
            tipo: "SOFTWARE_PROPRIETARIO",
            objetivo: "Simulação e projeto de sistemas de controle",
            disciplinas: "Controle de Sistemas, Cálculo Numérico"
        },
        {
            id: 6,
            url: "https://www.python.org/downloads/",
            nome: "Python",
            tipo: "SOFTWARE_LIVRE",
            objetivo: "Linguagem para aulas de lógica de programação e análise de dados",
            disciplinas: "Algoritmos, Inteligência Artificial"
        },
        {
            id: 7,
            url: "https://developer.android.com/studio",
            nome: "Android Studio",
            tipo: "SOFTWARE_LIVRE",
            objetivo: "Desenvolvimento de aplicativos Android",
            disciplinas: "Desenvolvimento Mobile"
        },
        {
            id: 8,
            url: "https://www.netacad.com/cisco-packet-tracer",
            nome: "Cisco Packet Tracer",
            tipo: "SOFTWARE_PROPRIETARIO",
            objetivo: "Simulação de redes e configuração de equipamentos",
            disciplinas: "Redes de Computadores, Infraestrutura de Redes"
        },
        {
            id: 9,
            url: "https://www.autodesk.com/products/autocad/overview",
            nome: "AutoCAD",
            tipo: "SOFTWARE_PROPRIETARIO",
            objetivo: "Desenho técnico e projetos de engenharia",
            disciplinas: "Desenho Técnico, Projetos de Engenharia"
        },
        {
            id: 10,
            url: "https://git-scm.com/downloads",
            nome: "Git",
            tipo: "SOFTWARE_LIVRE",
            objetivo: "Controle de versão de código nos projetos em grupo",
            disciplinas: "Engenharia de Software, Projeto Integrador"
        },
        {
            id: 11,
            url: "https://nodejs.org/en/download",
            nome: "Node.js",
            tipo: "SOFTWARE_LIVRE",
            objetivo: "Ambiente para executar e compilar projetos Angular",
            disciplinas: "Programação Web, Desenvolvimento Front-End"
        }
    ])

    obterPorId(id: number) : Software | undefined{
        return this.listaSofts().find(soft => soft.id===id);
    }

}
