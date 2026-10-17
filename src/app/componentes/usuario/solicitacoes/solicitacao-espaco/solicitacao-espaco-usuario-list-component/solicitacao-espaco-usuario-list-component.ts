import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SolicitacaoEspacoService } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';

@Component({
  selector: 'app-solicitacao-espaco-usuario-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, DatePipe],
  templateUrl: './solicitacao-espaco-usuario-list-component.html',
  styleUrl: './solicitacao-espaco-usuario-list-component.css',
})
export class SolicitacaoEspacoUsuarioListComponent implements OnInit {
  private solicitacaoService = inject(SolicitacaoEspacoService);

  // Expõe o Signal diretamente para o template (@for(solicitacao of solicitacoes(); ...))
  readonly solicitacoes = this.solicitacaoService.solicitacoes_espaco;

  ngOnInit(): void {
    this.solicitacaoService.carregarTodos().subscribe();
  }

  inativar(id: number): void {
    if (confirm('Tem certeza de que deseja inativar esta solicitação?')) {
      this.solicitacaoService.inativar(id).subscribe({
        error: (err) => console.error('Erro ao inativar solicitação:', err)
      });
    }
  }
}