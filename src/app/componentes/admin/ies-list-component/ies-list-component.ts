import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface Ies {
  id: number;
  sigla: string;
  nome: string;
  reitor: string;
  email: string;
  status: 'Ativa' | 'Inativa';
}

@Component({
  imports: [FormsModule],
  selector: 'app-ies-list-component',
  styleUrl: './ies-list-component.css',
  templateUrl: './ies-list-component.html',
})
export class IesListComponent {

  router = inject(Router);

  filtroTexto: string = '';
  filtroStatus: string = 'Todos';

  listaIes: Ies[] = [
    {
      id: 1,
      sigla: "UCSAL",
      nome: "Universidade Catolica do Salvador",
      reitor: "[Nome do reitor]",
      email: "xxxxx.xxxxxx@ucsal.edu.br",
      status: 'Ativa'
    },
    {
      id: 2, sigla: "UCB",
      nome: "Universidade Catolica de Brasilia",
      reitor: "[Nome do reitor]",
      email: "[E-mail]",
      status: 'Ativa'
    },
    {
      id: 3,
      sigla: "PUC-Rio",
      nome: "Pontifícia Universidade Católica do Rio de Janeiro",
      reitor: "[Nome do reitor]",
      email: "[E-mail]",
      status: 'Inativa'
    }
  ]

  get iesFiltradas() : Ies[] {
    return this.listaIes.filter(ies => {
      const atendeTexto = ies.sigla.toLowerCase().includes(this.filtroTexto.toLowerCase()) || ies.nome.toLowerCase().includes(this.filtroTexto.toLowerCase());
    
      const atendeStatus = this.filtroStatus === 'Todos' || ies.status == this.filtroStatus;

      return atendeTexto && atendeStatus;
    }) 
  }

  alternarStatus(ies:Ies) {
    ies.status = ies.status === "Ativa"? "Inativa" : "Ativa"; 
  }

  novaIes() {
    this.router.navigate(['admin/ies/nova'])
  }
}
