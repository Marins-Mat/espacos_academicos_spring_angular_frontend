import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Curso, CursoService } from '../../../../services/admin/curso/curso-service';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-curso-list-component',
  styleUrl: './curso-list-component.css',
  templateUrl: './curso-list-component.html',
})
export class CursoListComponent implements OnInit{
  router = inject(Router);
  cursoService = inject(CursoService);

  filtroTexto = signal('');
  filtroStatus = signal('Todos');

  ngOnInit(): void {
    this.cursoService.carregarTodos().subscribe()
  }


  cursosFiltrados = computed(() => {
    const texto = this.filtroTexto().toLowerCase().trim();
    const status = this.filtroStatus();
    const lista = this.cursoService.listaCurso();

    return lista.filter(curso => {
      const atendeTexto =
        curso.sigla.toLowerCase().includes(texto);

      const atendeStatus = status === 'Todos' || curso.status === status;

      return atendeTexto && atendeStatus;
    });
  });

  alternarStatus(id?: number) {
    if (!id) return
    this.cursoService.alterarStatus(id).subscribe({
      error: (err) => console.error('Erro ao alterar status do curso:', err)
    })
  }

  novoCurso() {
    this.router.navigate(['admin/curso/novo'])
  }
}
