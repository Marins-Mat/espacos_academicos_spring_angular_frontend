import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitacaoEspacoService } from '../../../../../services/colaborador/solicitacoes/solicitacao-espaco-service';
import { EaService } from '../../../../../services/colaborador/ea-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-solicitacao-espaco-usuario-just-component',
  styleUrl: './solicitacao-espaco-usuario-just-component.css',
  templateUrl: './solicitacao-espaco-usuario-just-component.html',
})
export class SolicitacaoEspacoUsuarioJustComponent {
  route = inject(ActivatedRoute)
  solService = inject(SolicitacaoEspacoService)
  eaService = inject(EaService)

  private paramMap = toSignal(this.route.paramMap)
  justificativa = signal<string>('');
  avaliador_nome = signal<number>(0);
  espaco_nome = signal<string>('')



  constructor() {
    effect(() => {
      const params = this.paramMap()
      const id = Number(params?.get('id'))

      if (id) {

        const solicitacaoEncontrada = this.solService.obterPorId(id);

        if (solicitacaoEncontrada) {

          this.avaliador_nome.set(Number(solicitacaoEncontrada.id_avaliador))

          const espacoEncontrado = this.eaService.obterPorId(solicitacaoEncontrada.id_espaco)
          if (espacoEncontrado) {
            this.espaco_nome.set(espacoEncontrado.nome)
          }


          const justificativaEncontrada = solicitacaoEncontrada.justificativa;

          if (justificativaEncontrada) {
            this.justificativa.set(justificativaEncontrada ?? '')
            return
          }

        }
      }
    })
  }
}
