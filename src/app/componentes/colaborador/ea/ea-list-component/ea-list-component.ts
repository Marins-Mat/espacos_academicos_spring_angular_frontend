import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ea, EaService } from '../../../../services/colaborador/ea-service';
@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-ea-list-component',
  styleUrl: './ea-list-component.css',
  templateUrl: './ea-list-component.html',
})
export class EaListComponent {

  router = inject(Router);
  eaService = inject(EaService);

  filtroTexto = signal('');
  filtroStatus = signal ('Todos');


  get easFiltradas() : Ea[] {
    return this.eaService.filtrar(this.filtroTexto(), this.filtroStatus());
  }

  alternarStatus(id:number) {
    this.eaService.alterarStatus(id)
  }

  novoEa() {
    this.router.navigate(['colaborador/ea/novo'])
  }


}
