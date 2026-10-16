import { Component, inject } from '@angular/core';
import { solicitacao_espaco, SolicitacaoEspacoService } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EaService } from '../../../../../services/colaborador/ea-service';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-solicitacao-espaco-list-component',
  styleUrl: './solicitacao-espaco-list-component.css',
  templateUrl: './solicitacao-espaco-list-component.html',
})
export class SolicitacaoEspacoListComponent {

  solicitacaoService = inject(SolicitacaoEspacoService)
  eaService = inject(EaService)

  get solicitacoes() : solicitacao_espaco[] {
    return this.solicitacaoService.solicitacoes_espaco();
  }

  aprovarSolicitacao() {
    console.log("Aprovada")
  }

}
