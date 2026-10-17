import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SolicitacaoEspacoService, SolicitacaoReservaResponseDto } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';

@Component({
  selector: 'app-solicitacao-espaco-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './solicitacao-espaco-list-component.html',
  styleUrl: './solicitacao-espaco-list-component.css',
})
export class SolicitacaoEspacoListComponent implements OnInit {
  private solicitacaoService = inject(SolicitacaoEspacoService);

  // Expõe o Signal de solicitações diretamente para o template
  readonly solicitacoes = this.solicitacaoService.solicitacoes_espaco;

  ngOnInit(): void {
    this.solicitacaoService.carregarTodos().subscribe();
  }

  aprovarSolicitacao(id: number): void {
    
  }
}