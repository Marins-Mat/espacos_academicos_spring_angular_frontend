import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { solicitacao_software, SolicitacaoSoftwareService } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service';
import { EaService } from '../../../../../services/colaborador/ea-service';
import { SoftwareService } from '../../../../../services/colaborador/software-service';


@Component({
  imports: [RouterLink],
  selector: 'app-solicitacao-software-list-component',
  styleUrl: './solicitacao-software-list-component.css',
  templateUrl: './solicitacao-software-list-component.html',
})
export class SolicitacaoSoftwareListComponent {
  solicitacaoService = inject(SolicitacaoSoftwareService)
  softService = inject(SoftwareService)
  eaService = inject(EaService)


  get solicitacoes() : solicitacao_software[] {
    return this.solicitacaoService.solicitacoes_software();
  }



  aprovarSolicitacao() {
    console.log("Aprovada")
  }
}
