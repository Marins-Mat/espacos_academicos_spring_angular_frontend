import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Ies, IesService } from '../../../services/admin/ies-service';


@Component({
  imports: [FormsModule],
  selector: 'app-ies-list-component',
  styleUrl: './ies-list-component.css',
  templateUrl: './ies-list-component.html',
})
export class IesListComponent {

  router = inject(Router);
  iesService = inject(IesService);

  filtroTexto = signal('');
  filtroStatus = signal ('Todos');


  get iesFiltradas() : Ies[] {
    return this.iesService.filtrar(this.filtroTexto(), this.filtroStatus());
  }

  alternarStatus(id:number) {
    this.iesService.alterarStatus(id)
  }

  novaIes() {
    this.router.navigate(['admin/ies/nova'])
  }
}
