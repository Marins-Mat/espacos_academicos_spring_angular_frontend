import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitacaoSoftwareService } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service';
import { SoftwareService } from '../../../../../services/colaborador/software-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-solicitacao-software-usuario-just-component',
  styleUrl: './solicitacao-software-usuario-just-component.css',
  templateUrl: './solicitacao-software-usuario-just-component.html',
})
export class SolicitacaoSoftwareUsuarioJustComponent {
  route = inject(ActivatedRoute)
    solService = inject(SolicitacaoSoftwareService)
    softService = inject(SoftwareService)
  
  
  
    private paramMap = toSignal(this.route.paramMap)
  
  
    isModoEditor = true
    justificativa = signal<string>('');
    avaliador_nome = signal<number>(0);
    software_nome = signal<string>('')
  
  
  
    constructor() {
      effect(() => {
        const params = this.paramMap()
        const id = Number(params?.get('id'))
  
        if (id) {
  
          const solicitacaoEncontrada = this.solService.obterPorId(id);
  
          if (solicitacaoEncontrada) {
  
            this.avaliador_nome.set(Number(solicitacaoEncontrada.id_avaliador))
  
            const softwareEncontrado = this.softService.obterPorId(solicitacaoEncontrada.id_software)
            if (softwareEncontrado) {
              this.software_nome.set(softwareEncontrado.nome)
            }
  
  
            const justificativaEncontrada = solicitacaoEncontrada.justificativa;
  
            if (justificativaEncontrada) {
              this.justificativa.set(justificativaEncontrada ?? '')
              return
            }
  
          }
        }

        this.justificativa.set('')
  
  
      })
    }
}
