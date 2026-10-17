import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitacaoEspacoService } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';
// Importe o DTO do arquivo onde ele está definido (ex: solicitacao-espaco.model ou do próprio arquivo do serviço)
import { SolicitacaoReservaResponseDto } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';

@Component({
  selector: 'app-solicitacao-espaco-usuario-just-component',
  standalone: true,
  imports: [],
  templateUrl: './solicitacao-espaco-usuario-just-component.html',
  styleUrl: './solicitacao-espaco-usuario-just-component.css',
})
export class SolicitacaoEspacoUsuarioJustComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private solService = inject(SolicitacaoEspacoService);

  justificativa = signal<string>('');
  avaliador_nome = signal<string>('');
  espaco_nome = signal<string>('');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.solService.obterPorId(id).subscribe({
        next: (sol: SolicitacaoReservaResponseDto) => {
          this.avaliador_nome.set(sol.avaliadorNome || '');
          this.espaco_nome.set(sol.espacoNome || '');
          this.justificativa.set(sol.justificativaReprovacao || '');
        }
      });
    }
  }

  
}