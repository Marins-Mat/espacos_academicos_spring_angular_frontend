import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SolicitacaoSoftwareService } from '../../../../../services/colaborador/solicitacoes/solicitacao-software-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SoftwareService } from '../../../../../services/colaborador/software-service';

@Component({
  imports: [FormsModule],
  selector: 'app-solicitacao-software-just-component',
  styleUrl: './solicitacao-software-just-component.css',
  templateUrl: './solicitacao-software-just-component.html',
})
export class SolicitacaoSoftwareJustComponent {
  route = inject(ActivatedRoute)
  solService = inject(SolicitacaoSoftwareService)
  softService = inject(SoftwareService)



  private paramMap = toSignal(this.route.paramMap)


  isModoEditor = true
  justificativa = signal<string>('');
  solicitante_nome = signal<number>(0);
  software_nome = signal<string>('')



  constructor() {
    effect(() => {
      const params = this.paramMap()
      const id = Number(params?.get('id'))

      if (id) {

        const solicitacaoEncontrada = this.solService.obterPorId(id);

        if (solicitacaoEncontrada) {

          this.solicitante_nome.set(Number(solicitacaoEncontrada.id_solicitante))

          const softwareEncontrado = this.softService.obterPorId(solicitacaoEncontrada.id_software)
          if (softwareEncontrado) {
            this.software_nome.set(softwareEncontrado.nome)
          }


          const justificativaEncontrada = solicitacaoEncontrada.justificativa;

          if (justificativaEncontrada) {
            this.isModoEditor = false
            this.justificativa.set(justificativaEncontrada ?? '')
            return
          }

        }
      }

      this.isModoEditor = true
      this.justificativa.set('')


    })
  }

  salvarReprovacao() {
    
  }
}
