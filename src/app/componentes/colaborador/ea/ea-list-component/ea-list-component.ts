import { Component, computed, inject, signal } from '@angular/core';
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

  ngOnInit(): void {
    this.eaService.carregarTodos().subscribe()
  }

   easFiltrados = computed(() => {
    const texto = this.filtroTexto().toLowerCase().trim();
    const status = this.filtroStatus();
    const lista = this.eaService.listaEas();

    return lista.filter(ea => {
      const atendeTexto =
        ea.nome.toLowerCase().includes(texto);

      const atendeStatus = status === 'Todos' || ea.status === status;

      return atendeTexto && atendeStatus;
    });
  });

  alternarStatus(id?: number) {
    if (!id) return
    this.eaService.alterarStatus(id).subscribe({
      error: (err) => console.error('Erro ao alterar status do espaço acadêmico:', err)
    })
  }

  novoEa() {
    this.router.navigate(['colaborador/ea/novo'])
  }


}
