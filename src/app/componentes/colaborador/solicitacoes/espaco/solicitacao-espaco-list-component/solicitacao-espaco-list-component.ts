import { Component, inject, signal } from '@angular/core';
import { solicitacao_espaco, SolicitacaoEspacoService } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-solicitacao-espaco-list-component',
  styleUrl: './solicitacao-espaco-list-component.css',
  templateUrl: './solicitacao-espaco-list-component.html',
})
export class SolicitacaoEspacoListComponent {

  solicitacaoService = inject(SolicitacaoEspacoService)
  

  get solicitacoes() : solicitacao_espaco[] {
    return this.solicitacaoService.solicitacoes_espaco();
  }

  aprovarSolicitacao() {

  }


  verJustificativa() {

  }


}
