import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SolicitacaoSoftwareService } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service';

@Component({
  selector: 'app-solicitacao-software-usuario-just-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitacao-software-usuario-just-component.html',
  styleUrl: './solicitacao-software-usuario-just-component.css',
})
export class SolicitacaoSoftwareUsuarioJustComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private solService = inject(SolicitacaoSoftwareService);

  justificativa = signal<string>('');
  avaliador_nome = signal<string>('');
  software_nome = signal<string>('');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.solService.obterPorId(id).subscribe({
        next: (sol) => {
          this.avaliador_nome.set(sol.avaliadorNome || 'Não informado');
          this.software_nome.set(sol.softwareNome || 'Não informado');
          this.justificativa.set(sol.justificativaReprovacao || 'Sem justificativa informada.');
        }
      });
    }
  }
}