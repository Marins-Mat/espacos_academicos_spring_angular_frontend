import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { solicitacao_software, SolicitacaoSoftwareService } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service';

@Component({
  imports: [RouterLink],
  selector: 'app-solicitacao-software-list-component',
  styleUrl: './solicitacao-software-list-component.css',
  templateUrl: './solicitacao-software-list-component.html',
})
export class SolicitacaoSoftwareListComponent {
  solicitacaoService = inject(SolicitacaoSoftwareService)
  

  get solicitacoes() : solicitacao_software[] {
    return this.solicitacaoService.solicitacoes_software();
  }

  aprovarSolicitacao() {

  }


  verJustificativa() {

  }
}
