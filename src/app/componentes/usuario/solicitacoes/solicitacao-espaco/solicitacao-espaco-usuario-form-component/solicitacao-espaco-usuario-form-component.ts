import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ea, EaService } from '../../../../../services/colaborador/ea-service';
import { SolicitacaoEspacoService } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';
import { SolicitacaoReservaRequestDto } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service'; 
import { AuthService } from '../../../../../core/auth/auth-service';

@Component({
  selector: 'app-solicitacao-espaco-usuario-form-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './solicitacao-espaco-usuario-form-component.html',
  styleUrl: './solicitacao-espaco-usuario-form-component.css',
})
export class SolicitacaoEspacoUsuarioFormComponent implements OnInit {
  private solService = inject(SolicitacaoEspacoService);
  private eaService = inject(EaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService)
  isModoEditor = false;
  solicitacaoId?: number;

  solForm: SolicitacaoReservaRequestDto = {
    dataUtilizacao: '',
    horaInicio: '',
    horaFim: '',
    espacoId: 1,
    solicitanteId: this.authService.obterUsuarioId() || 0
  };

  ngOnInit(): void {
    this.eaService.carregarTodos().subscribe();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isModoEditor = true;
      this.solicitacaoId = Number(id);

      this.solService.obterPorId(this.solicitacaoId).subscribe(sol => {
        this.solForm = {
          dataUtilizacao: sol.dataUtilizacao,
          horaInicio: sol.horaInicio,
          horaFim: sol.horaFim,
          espacoId: sol.espacoId ?? 1,
          solicitanteId: sol.solicitanteId ?? 1
        };
      });
    }
  }

  get espacos(): Ea[] {
    return this.eaService.listaEas();
  }

  salvar(): void {
    const payload: SolicitacaoReservaRequestDto = {
      ...this.solForm,
      espacoId: Number(this.solForm.espacoId),
      solicitanteId: Number(this.solForm.solicitanteId)
    };

    if (this.isModoEditor && this.solicitacaoId) {
      this.solService.salvar(this.solicitacaoId, payload).subscribe(() => {
        this.router.navigate(['/usuario/solicitacoes_espaco']);
      });
    } else {
      this.solService.adicionar(payload).subscribe(() => {
        this.router.navigate(['/usuario/solicitacoes_espaco']);
      });
    }
  }
}