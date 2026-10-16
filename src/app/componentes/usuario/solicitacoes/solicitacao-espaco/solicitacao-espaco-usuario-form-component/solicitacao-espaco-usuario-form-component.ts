import { Component, inject } from '@angular/core';
import { Ea, EaService } from '../../../../../services/colaborador/ea-service';

@Component({
  imports: [],
  selector: 'app-solicitacao-espaco-usuario-form-component',
  styleUrl: './solicitacao-espaco-usuario-form-component.css',
  templateUrl: './solicitacao-espaco-usuario-form-component.html',
})
export class SolicitacaoEspacoUsuarioFormComponent {

  eaService = inject(EaService)

  isModoEditor = false

  get espacos() : Ea[] | undefined{
    return this.eaService.listaEas()
  }

  salvar() {

  }
}
