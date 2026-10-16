import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { SolicitacaoEspacoService } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';
import { EaService } from '../../../../../services/colaborador/ea-service';

@Component({
  imports: [],
  selector: 'app-solicitacao-espaco-just-component',
  styleUrl: './solicitacao-espaco-just-component.css',
  templateUrl: './solicitacao-espaco-just-component.html',
})
export class SolicitacaoEspacoJustComponent {
  route = inject(ActivatedRoute)
  solService = inject(SolicitacaoEspacoService)
  eaService = inject(EaService)



  private paramMap = toSignal(this.route.paramMap)


  isModoEditor = true
  justificativa = signal<string>('');
  solicitante_nome = signal<number>(0);
  espaco_nome = signal<string>('')



  constructor() {
    effect(() => {
      const params = this.paramMap()
      const id = Number(params?.get('id'))

      if (id) {

        const solicitacaoEncontrada = this.solService.obterPorId(id);

        if (solicitacaoEncontrada) {

          this.solicitante_nome.set(Number(solicitacaoEncontrada.id_solicitante))

          const espacoEncontrado = this.eaService.obterPorId(solicitacaoEncontrada.id_espaco)
          if (espacoEncontrado) {
            this.espaco_nome.set(espacoEncontrado.nome)
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
