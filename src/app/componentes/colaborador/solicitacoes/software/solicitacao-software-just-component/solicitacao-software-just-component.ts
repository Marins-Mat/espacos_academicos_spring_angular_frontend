import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SolicitacaoSoftwareService } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service';
import { AuthService } from '../../../../../core/auth/auth-service';

@Component({
  selector: 'app-solicitacao-software-just-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './solicitacao-software-just-component.html',
  styleUrl: './solicitacao-software-just-component.css',
})
export class SolicitacaoSoftwareJustComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
    authService = inject(AuthService)
  private solService = inject(SolicitacaoSoftwareService);

  solicitacaoId?: number;
  isModoEditor = true;

  textoJustificativa = '';
  solicitante_nome = signal<string>('');
  software_nome = signal<string>('');
  justificativa = signal<string>('');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.solicitacaoId = id;
      this.solService.obterPorId(id).subscribe({
        next: (sol) => {
          this.software_nome.set(sol.softwareNome || 'N/A');
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
  }

  salvarReprovacao(): void {
    if (!this.solicitacaoId || !this.textoJustificativa.trim()) {
      alert('Por favor, preencha a justificativa da reprovação.');
      return;
    }

    const avaliadorId = this.authService.obterUsuarioId() ?? 0;

    this.solService.reprovar(this.solicitacaoId, {
      avaliadorId,
      justificativaReprovacao: this.textoJustificativa
    }).subscribe({
      next: () => {
        this.router.navigate(['/colaborador/solicitacoes_software']);
      },
      error: (err) => console.error('Erro ao reprovar solicitação:', err)
    });
  }
}