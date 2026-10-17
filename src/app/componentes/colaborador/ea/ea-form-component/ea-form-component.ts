import { Component, inject, signal } from '@angular/core';
import { Ea, EaService } from '../../../../services/colaborador/ea-service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ca, CaService } from '../../../../services/admin/ca/ca-service';

@Component({
  imports: [FormsModule, RouterLink, RouterOutlet],
  selector: 'app-ea-form-component',
  styleUrl: './ea-form-component.css',
  templateUrl: './ea-form-component.html',
})
export class EaFormComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  eaService = inject(EaService);
  caService = inject(CaService)
  isModoEditor = false;

  eaForm = signal<Ea>({
    sigla: '',
    nome: '',
    tipo: 'SALA',
    descricaoComplementar: '',
    capacidadeMaxima: 0,
    localizacao: '',
    centroAcademicoId: 1
  })



  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');


    if (idParam) {
      const id = Number(idParam);
      this.isModoEditor = true;

      this.eaService.obterPorId(id).subscribe({
        next: (espacoEncontrado: Ea) => {

          let dataFormatada: any = espacoEncontrado.dataCadastro;
          if (dataFormatada) {
            dataFormatada = new Date(dataFormatada).toISOString().split('T')[0];
          }

          this.eaForm.set({
            id: espacoEncontrado.id,
            sigla: espacoEncontrado.sigla,
            nome: espacoEncontrado.nome,
            capacidadeMaxima: espacoEncontrado.capacidadeMaxima,
            tipo: espacoEncontrado.tipo,
            descricaoComplementar: espacoEncontrado.descricaoComplementar,
            localizacao: espacoEncontrado.localizacao,
            centroAcademicoId: espacoEncontrado.centroAcademicoId,
            centroAcademicoNome: espacoEncontrado.centroAcademicoNome,
            status: espacoEncontrado.status,
            dataCadastro: dataFormatada
          })
        }
      })
    }
  }

  centros(): Ca[] {
      this.caService.carregarTodas().subscribe();
      return this.caService.listaCas();
    }

  salvar() {

    if (this.isModoEditor) {
      this.eaService.salvar(this.eaForm()).subscribe()
    } else {
      this.eaService.adicionar(this.eaForm()).subscribe();
    }

    this.router.navigate(['colaborador/ea']);
  }

}
