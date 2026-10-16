import { Component, inject } from '@angular/core';
import { EaService } from '../../../../../services/colaborador/ea-service';
import { SoftwareService } from '../../../../../services/colaborador/software-service';
import { solicitacao_software, SolicitacaoSoftwareService } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-solicitacao-software-usuario-list-component',
  styleUrl: './solicitacao-software-usuario-list-component.css',
  templateUrl: './solicitacao-software-usuario-list-component.html',
})
export class SolicitacaoSoftwareUsuarioListComponent {

  solicitacaoService = inject(SolicitacaoSoftwareService)
  softService = inject(SoftwareService)
  eaService = inject(EaService)


  get solicitacoes() : solicitacao_software[] {
    return this.solicitacaoService.solicitacoes_software();
  }


  inativar() {
    
  }

  aprovarSolicitacao() {
    console.log("Aprovada")
  }

}
