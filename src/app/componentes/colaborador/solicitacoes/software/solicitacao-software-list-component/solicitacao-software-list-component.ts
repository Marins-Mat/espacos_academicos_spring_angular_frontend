import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SolicitacaoSoftwareService } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service';
import { AuthService } from '../../../../../core/auth/auth-service';

@Component({
  selector: 'app-solicitacao-software-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './solicitacao-software-list-component.html',
  styleUrl: './solicitacao-software-list-component.css',
})
export class SolicitacaoSoftwareListComponent implements OnInit {
  private solicitacaoService = inject(SolicitacaoSoftwareService);
  authService = inject(AuthService)
  readonly solicitacoes = this.solicitacaoService.solicitacoes_software;

  ngOnInit(): void {
    this.solicitacaoService.carregarTodas().subscribe();
  }

  aprovarSolicitacao(id: number): void {
    const
      avaliadorId = this.authService.obterUsuarioId() ?? 0

    if (confirm('Tem certeza de que deseja aprovar esta solicitação?')) {
      this.solicitacaoService.aprovar(id, avaliadorId).subscribe({
        error: (err) => console.error('Erro ao aprovar solicitação:', err)
      });
    }
  }
}