import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ea, EaService } from '../../../../../services/colaborador/ea-service';
import { Software, SoftwareService } from '../../../../../services/colaborador/software-service';
import { SolicitacaoSoftwareService } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service';
import { SolicitacaoSoftwareRequestDto } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service'; 
import { AuthService } from '../../../../../core/auth/auth-service';

@Component({
  selector: 'app-solicitacao-software-usuario-form-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './solicitacao-software-usuario-form-component.html',
  styleUrl: './solicitacao-software-usuario-form-component.css',
})
export class SolicitacaoSoftwareUsuarioFormComponent implements OnInit {
  private eaService = inject(EaService);
  private softService = inject(SoftwareService);
  private solService = inject(SolicitacaoSoftwareService);
  private authService = inject(AuthService)
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  isModoEditor = false;
  solicitacaoId?: number;

  solForm: SolicitacaoSoftwareRequestDto = {
    laboratorioId: 1,
    softwareId: 1,
    solicitanteId: this.authService.obterUsuarioId() || 0,
    justificativaUso: '',
    disciplina: '',
    dataLimiteNecessidade: ''
  };

  ngOnInit(): void {
    this.eaService.carregarTodos().subscribe();
    this.softService.carregarTodos().subscribe();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isModoEditor = true;
      this.solicitacaoId = Number(id);

      this.solService.obterPorId(this.solicitacaoId).subscribe(sol => {
        this.solForm = {
          laboratorioId: sol.laboratorioId ?? 1,
          softwareId: sol.softwareId ?? 1,
          solicitanteId: sol.solicitanteId ?? 1,
          justificativaUso: '',
          disciplina: '',
          dataLimiteNecessidade: ''
        };
      });
    }
  }

  get laboratorios(): Ea[] {
    return this.eaService.listaEas().filter(lab => lab.tipo === 'LABORATORIO');
  }

  get softwares(): Software[] {
    return this.softService.listaSofts();
  }

  salvar(): void {
    const payload: SolicitacaoSoftwareRequestDto = {
      ...this.solForm,
      laboratorioId: Number(this.solForm.laboratorioId),
      softwareId: Number(this.solForm.softwareId),
      solicitanteId: Number(this.solForm.solicitanteId)
    };

    this.solService.solicitar(payload).subscribe(() => {
      this.router.navigate(['/usuario/solicitacoes_software']);
    });
  }
}