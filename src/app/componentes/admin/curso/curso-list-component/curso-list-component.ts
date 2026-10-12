import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Curso, CursoService } from '../../../../services/admin/curso/curso-service';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-curso-list-component',
  styleUrl: './curso-list-component.css',
  templateUrl: './curso-list-component.html',
})
export class CursoListComponent {
  router = inject(Router);
  cursoService = inject(CursoService);

  filtroTexto = signal('');
  filtroStatus = signal ('Todos');


  get cursosFiltradas() : Curso[] {
    return this.cursoService.filtrar(this.filtroTexto(), this.filtroStatus());
  }

  alternarStatus(id:number) {
    this.cursoService.alterarStatus(id)
  }

  novoCurso() {
    this.router.navigate(['admin/curso/novo'])
  }
}
