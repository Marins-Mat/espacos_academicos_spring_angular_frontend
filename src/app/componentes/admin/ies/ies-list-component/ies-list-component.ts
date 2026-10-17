import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Ies, IesService } from '../../../../services/admin/ies/ies-service';


@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-ies-list-component',
  styleUrl: './ies-list-component.css',
  templateUrl: './ies-list-component.html',
})
export class IesListComponent implements OnInit {

  router = inject(Router);
  iesService = inject(IesService);

  filtroTexto = signal('');
  filtroStatus = signal('Todos');

  ngOnInit(): void {
    // Carrega a lista do backend ao iniciar o componente
    this.iesService.carregarTodas().subscribe();
  }

  iesFiltradas = computed(() => {
    const texto = this.filtroTexto().toLowerCase().trim();
    const status = this.filtroStatus();
    const lista = this.iesService.listaIes();

    return lista.filter(ies => {
      const atendeTexto =
        ies.sigla.toLowerCase().includes(texto) ||
        ies.nome.toLowerCase().includes(texto);

      const atendeStatus = status === 'Todos' || ies.status === status;

      return atendeTexto && atendeStatus;
    });
  });

  alternarStatus(id?: number): void {
    if (!id) return
    this.iesService.alterarStatus(id).subscribe({
      error: (err) => console.error('Erro ao alterar status da IES:', err)
    })
  }

  novaIes() {
    this.router.navigate(['admin/ies/nova'])
  }
}
