import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ea, EaService } from '../../../services/colaborador/ea-service';
import { Software, SoftwareService } from '../../../services/colaborador/software-service';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-novo-software-component',
  styleUrl: './novo-software-component.css',
  templateUrl: './novo-software-component.html',
  viewProviders: [
    { provide: ControlContainer, useExisting: NgForm }
  ],
})
export class NovoSoftwareComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  eaService = inject(EaService);
  softService = inject(SoftwareService)

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

  softwareId = signal<number>(0);

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

  softs(): Software[] {
    this.softService.carregarTodos().subscribe();
    return this.softService.listaSofts();
  }


  salvar(): void {
  const softwareId = this.softwareId();
  const eaId = Number(this.eaForm().id);

  if (!softwareId) {
    alert('Selecione um software antes de salvar.');
    return;
  }

  if (this.isModoEditor && eaId) {
    this.eaService.adicionarSoftware(softwareId, eaId).subscribe({
      next: () => {
        this.router.navigate(['/colaborador', 'ea', 'editar', eaId]);
      },
      error: (err) => {
        console.error('Erro ao vincular software:', err);
      }
    });
  }
}

}

