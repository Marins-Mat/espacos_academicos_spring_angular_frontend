import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ies, IesService } from '../../../../services/admin/ies/ies-service';
import { proreitoriaResponse } from '../../../../services/admin/proreitoria/reitoria';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-ies-form-component',
  styleUrl: './ies-form-component.css',
  templateUrl: './ies-form-component.html',
})
export class IesFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private iesService = inject(IesService);


  isModoEditor = false;

  iesForm = signal<Ies>({
    sigla: '',
    nome: '',
    nomeReitor: '',
    telefoneCentral: '',
    emailCentral: '',
    proReitorias: []
  })


  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId) {
      const id = Number(paramId);
      this.isModoEditor = true;

      this.iesService.obterPorId(id).subscribe({
        next: (iesEncontrada: Ies) => {

          let dataFormatada: any = iesEncontrada.dataCadastramento;
          if (dataFormatada) {
            dataFormatada = new Date(dataFormatada).toISOString().split('T')[0];
          }

          this.iesForm.set({
            id: iesEncontrada.id,
            sigla: iesEncontrada.sigla,
            nome: iesEncontrada.nome,
            nomeReitor: iesEncontrada.nomeReitor,
            telefoneCentral: iesEncontrada.telefoneCentral,
            emailCentral: iesEncontrada.emailCentral,
            proReitorias: iesEncontrada.proReitorias,
            dataCadastramento: dataFormatada,
            status: iesEncontrada.status
          });
        },
        error: (err) => {
          console.error('Erro ao buscar IES:', err);
          this.router.navigate(['/admin/ies']);
        }
      });
    }
  }

  get proReitorias(): proreitoriaResponse[] {
    return this.iesForm().proReitorias
  }


  salvar() {
    console.log(this.iesForm())
    if (this.isModoEditor) {
      this.iesService.salvar(this.iesForm()).subscribe;
    } else {
      this.iesService.adicionar(this.iesForm()).subscribe;
    }

    this.router.navigate(['/admin/ies']);
  }
}
