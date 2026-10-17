import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuditoriaService } from '../../../../services/admin/relatorio-auditoria/auditoria-service';
import { DatePipe } from '@angular/common';

export interface log {
  id: number;
  data_ocorrido: Date;
  acao: string;
  entidade: string;
  id_usario: number;
  usario_nome: string;
}

@Component({
  imports: [FormsModule, DatePipe],
  selector: 'app-auditoria-component',
  styleUrl: './auditoria-component.css',
  templateUrl: './auditoria-component.html',
})
export class AuditoriaComponent {
  router = inject(Router);
  audService = inject(AuditoriaService);

  filtroTexto = signal<string>('');

  ngOnInit(): void {
    this.audService.carregarTodos().subscribe()
  }

  logsFiltrados = computed(() => {
    const textoUsuario = this.filtroTexto().toLowerCase().trim();

    const lista = this.audService.listaLogs();

    return lista.filter(log => {
      const atendeUsuario =
        log.usuarioNome.toLowerCase().includes(textoUsuario);


      return atendeUsuario;
    });
  });

}
