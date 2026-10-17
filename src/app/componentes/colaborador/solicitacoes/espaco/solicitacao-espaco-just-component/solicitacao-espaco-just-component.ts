import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { solicitacao_espaco, SolicitacaoEspacoService } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';
import { EaService } from '../../../../../services/colaborador/ea-service';
import { AuthService } from '../../../../../core/auth/auth-service';

@Component({
  imports: [],
  selector: 'app-solicitacao-espaco-just-component',
  styleUrl: './solicitacao-espaco-just-component.css',
  templateUrl: './solicitacao-espaco-just-component.html',
})
export class SolicitacaoEspacoJustComponent {
  route = inject(ActivatedRoute)
  private router = inject(Router);
  solService = inject(SolicitacaoEspacoService)
  eaService = inject(EaService)
  authService = inject(AuthService)


  private paramMap = toSignal(this.route.paramMap)

  solicitacaoId?: number;
  isModoEditor = true;

  textoJustificativa = '';
  justificativa = signal<string>('');
  solicitante_nome = signal<string>('');
  espaco_nome = signal<string>('')




  constructor() {
    effect(() => {
      const params = this.paramMap()
      const id = Number(params?.get('id'))

      if (id) {
        this.solicitacaoId = id;
        this.solService.obterPorId(id).subscribe({
          next: (sol) => {
            this.espaco_nome.set(sol.espacoNome || 'N/A');
            this.solicitante_nome.set(sol.solicitanteNome || 'N/A');

            if (sol.justificativaReprovacao) {
              this.isModoEditor = false;
              this.justificativa.set(sol.justificativaReprovacao);
            } else {
              this.isModoEditor = true;
            }
          }
        });
      }


    })
  }

  salvarReprovacao(): void {
    if (!this.solicitacaoId || !this.justificativa().trim()) {
      alert('Por favor, preencha a justificativa da reprovação.');
      return;
    }

    const avaliadorId = this.authService.obterUsuarioId() ?? 0;

    this.solService.reprovarSolicitacao(this.solicitacaoId, {
      avaliadorId,
      motivo: this.justificativa()
    }).subscribe({
      next: () => {
        this.router.navigate(['/colaborador/solicitacoes_software']);
      },
      error: (err) => console.error('Erro ao reprovar solicitação:', err)
    });
  }
}
