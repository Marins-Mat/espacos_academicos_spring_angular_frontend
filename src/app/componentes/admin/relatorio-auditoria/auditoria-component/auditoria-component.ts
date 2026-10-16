import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Ca, CaService } from '../../../../services/admin/ca/ca-service';
import { FormsModule } from '@angular/forms';


export interface log {
  id: number;
  data_ocorrido: Date;
  acao: string;
  entidade: string;
  id_usario: number;
  usario_nome: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-auditoria-component',
  styleUrl: './auditoria-component.css',
  templateUrl: './auditoria-component.html',
})
export class AuditoriaComponent {
  router = inject(Router);
  caService = inject(CaService);

  filtroTexto = signal('');
  filtroStatus = signal('Todos');


  get logs(): log[] {
    return [];
  }
}
