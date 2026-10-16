import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { EaService } from '../../../../../services/colaborador/ea-service';
import { solicitacao_espaco, SolicitacaoEspacoService } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-solicitacao-espaco-usuario-list-component',
  styleUrl: './solicitacao-espaco-usuario-list-component.css',
  templateUrl: './solicitacao-espaco-usuario-list-component.html',
})
export class SolicitacaoEspacoUsuarioListComponent {
  route = inject(ActivatedRoute);
  eaService = inject(EaService);
  solService = inject(SolicitacaoEspacoService)

  inativar() {

  }

  novaSolicitacao() {
    
  }

  get solicitacoes() : solicitacao_espaco[] {
    return this.solService.solicitacoes_espaco()
  }

}
