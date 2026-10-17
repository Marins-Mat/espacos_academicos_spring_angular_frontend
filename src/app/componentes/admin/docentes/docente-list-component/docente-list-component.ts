import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DocenteService } from '../../../../services/admin/docentes/docente-service';

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
  filtroStatus = signal('Todos');

  
  ngOnInit(): void {
    this.docenteService.carregarTodos().subscribe()
  }


  docentesFiltrados = computed(() => {
    const texto = this.filtroTexto().toLowerCase().trim();
    const status = this.filtroStatus();
    const lista = this.docenteService.listaDocentes();

    return lista.filter(docente => {
      const atendeTexto =
        docente.nomeCompleto.toLowerCase().includes(texto);

      const atendeStatus = status === 'Todos' || docente.status === status;

      return atendeTexto && atendeStatus;
    });
  });

  alternarStatus(id?: number) {
    if (!id) return
    this.docenteService.alterarStatus(id).subscribe({
      error: (err) => console.error('Erro ao alterar status do docente:', err)
    })
  }

  novoDocente() {
    this.router.navigate(['admin/docentes/novo'])
  }

}
