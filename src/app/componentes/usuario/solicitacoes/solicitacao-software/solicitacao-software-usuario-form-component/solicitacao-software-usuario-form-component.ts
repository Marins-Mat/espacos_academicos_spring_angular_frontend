import { Component, inject } from '@angular/core';
import { Ea, EaService } from '../../../../../services/colaborador/ea-service';

@Component({
  imports: [],
  selector: 'app-solicitacao-software-usuario-form-component',
  styleUrl: './solicitacao-software-usuario-form-component.css',
  templateUrl: './solicitacao-software-usuario-form-component.html',
})
export class SolicitacaoSoftwareUsuarioFormComponent {
  eaService = inject(EaService)

  isModoEditor = false

  get espacos() : Ea[] | undefined{
    return this.eaService.listaEas().filter(lab => lab.tipo==="LABORATORIO")
  }

  salvar() {

  }
}
