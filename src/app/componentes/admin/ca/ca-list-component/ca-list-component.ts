import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Ca, CaService } from '../../../../services/admin/ca/ca-service';


@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-ca-list-component',
  styleUrl: './ca-list-component.css',
  templateUrl: './ca-list-component.html',
})

export class CaListComponent implements OnInit{
  router = inject(Router);
  caService = inject(CaService);

  filtroTexto = signal('');
  filtroStatus = signal('Todos');

  ngOnInit(): void {
    // Carrega a lista do backend ao iniciar o componente
    this.caService.carregarTodas().subscribe();
  }

  casFiltradas = computed(() => {
    const texto = this.filtroTexto().toLowerCase().trim();
    const status = this.filtroStatus();
    const lista = this.caService.listaCas();

    return lista.filter(ca => {
      const atendeTexto =
        ca.nome.toLowerCase().includes(texto);

      const atendeStatus = status === 'Todos' || ca.status === status;

      return atendeTexto && atendeStatus;
    });
  });

  alternarStatus(id?: number) {
    if (!id) return
    this.caService.alterarStatus(id).subscribe({
      error: (err) => console.error('Erro ao alterar status do CA:', err)
    })
  }

  novoCa() {
    this.router.navigate(['admin/ca/novo'])
  }
}
