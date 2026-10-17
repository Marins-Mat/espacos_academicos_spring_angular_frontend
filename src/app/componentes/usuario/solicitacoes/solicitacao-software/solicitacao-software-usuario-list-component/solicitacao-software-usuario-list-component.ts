import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SolicitacaoSoftwareService } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service';

@Component({
  selector: 'app-solicitacao-software-usuario-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './solicitacao-software-usuario-list-component.html',
  styleUrl: './solicitacao-software-usuario-list-component.css',
})
export class SolicitacaoSoftwareUsuarioListComponent implements OnInit {
  private solicitacaoService = inject(SolicitacaoSoftwareService);

  readonly solicitacoes = this.solicitacaoService.solicitacoes_software;

  ngOnInit(): void {
    this.solicitacaoService.carregarTodas().subscribe();
  }

  inativar(id: number): void {
    if (confirm('Deseja realmente inativar esta solicitação?')) {
      // Implementação da chamada HTTP de inativação
    }
  }
}