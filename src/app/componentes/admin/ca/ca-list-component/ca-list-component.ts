import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Ca, CaService } from '../../../../services/admin/ca/ca-service';


@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-ca-list-component',
  styleUrl: './ca-list-component.css',
  templateUrl: './ca-list-component.html',
})

export class CaListComponent {
  router = inject(Router);
  caService = inject(CaService);

  filtroTexto = signal('');
  filtroStatus = signal ('Todos');


  get casFiltradas() : Ca[] {
    return this.caService.filtrar(this.filtroTexto(), this.filtroStatus());
  }

  alternarStatus(id:number) {
    this.caService.alterarStatus(id)
  }

  novoCa() {
    this.router.navigate(['admin/ca/novo'])
  }
}
