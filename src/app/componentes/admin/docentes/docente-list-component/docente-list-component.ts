import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Docente, DocenteService } from '../../../../services/admin/docentes/docente-service';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-docente-list-component',
  styleUrl: './docente-list-component.css',
  templateUrl: './docente-list-component.html',
})
export class DocenteListComponent {

  router = inject(Router);
  docenteService = inject(DocenteService);

  filtroTexto = signal('');
  filtroStatus = signal ('Todos');


  get docentesFiltrados() : Docente[] {
    return this.docenteService.filtrar(this.filtroTexto(), this.filtroStatus());
  }

  alternarStatus(id:number) {
    this.docenteService.alterarStatus(id)
  }

  novoDocente() {
    this.router.navigate(['admin/docentes/novo'])
  }

}
