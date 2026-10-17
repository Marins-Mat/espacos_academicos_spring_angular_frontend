import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ca, CaService } from '../../../../services/admin/ca/ca-service';
import { FormsModule } from '@angular/forms';
import { Ies, IesService } from '../../../../services/admin/ies/ies-service';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-ca-form-component',
  styleUrl: './ca-form-component.css',
  templateUrl: './ca-form-component.html',
})
export class CaFormComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  caService = inject(CaService);
  iesService = inject(IesService)

  isModoEditor = false;

  caForm = signal<Ca>({
    nome: '',
    nomeCoordenador: '',
    iesId: 1,
    emailCentral: '',
    telefoneCentral: ''
  })

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const id = Number(idParam);
      this.isModoEditor = true;

      this.caService.obterPorId(id).subscribe({
        next: (caEncontrada: Ca) => {

          let dataFormatada: any = caEncontrada.dataCadastramento;
          if (dataFormatada) {
            dataFormatada = new Date(dataFormatada).toISOString().split('T')[0];
          }

          this.caForm.set({
            id: caEncontrada.id,
            nome: caEncontrada.nome,
            nomeCoordenador: caEncontrada.nomeCoordenador,
            iesId: caEncontrada.iesId,
            iesSigla: caEncontrada.iesSigla,
            emailCentral: caEncontrada.emailCentral,
            telefoneCentral: caEncontrada.telefoneCentral,
            dataCadastramento: dataFormatada,
            status: caEncontrada.status
          })
        }
      })
    }
  }

  instituicoes(): Ies[] {
    this.iesService.carregarTodas().subscribe();
    return this.iesService.listaIes();
  }

  salvar() {
    if (this.isModoEditor) {
      this.caService.salvar(this.caForm()).subscribe();
    } else {
      this.caService.adicionar(this.caForm()).subscribe();
    }

    this.router.navigate(['admin/ca']);
  }
}
