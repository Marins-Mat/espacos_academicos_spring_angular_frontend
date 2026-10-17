import { Component, computed, inject, signal } from '@angular/core';
import { Ea, EaService } from '../../../services/colaborador/ea-service';
import { Software, SoftwareService } from '../../../services/colaborador/software-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-tabela-softwares-component',
  styleUrl: './tabela-softwares-component.css',
  templateUrl: './tabela-softwares-component.html',
  viewProviders: [
    { provide: ControlContainer, useExisting: NgForm }
  ]
})
export class TabelaSoftwaresComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  eaService = inject(EaService);
  softService = inject(SoftwareService)
  isModoEditor = false;

  eaForm = signal<Ea>({
    id: 1,
    sigla: '',
    nome: '',
    tipo: 'SALA',
    descricaoComplementar: '',
    capacidadeMaxima: 0,
    localizacao: '',
    centroAcademicoId: 0
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
            dataCadastro: dataFormatada,
            softwares: espacoEncontrado.softwares
          })
        }
      })
    }

  }
  softsFiltrados = computed(() => {
    const idsSelecionados = this.eaForm().softwares ?? [];
    const todosSoftwares = this.softService.listaSofts(); // Signal com todos os softwares cadastrados

    return todosSoftwares.filter(soft => idsSelecionados.includes(soft.id ?? 1));
  });
  salvar() {

    if (this.isModoEditor) {
      this.eaService.salvar(this.eaForm()).subscribe();
    } else {
      this.eaService.adicionar(this.eaForm()).subscribe();
    }

    this.router.navigate(['colaborador/ea']);
  }

  adicionarSoftware() {
    if (this.isModoEditor) {
      const id = this.eaForm().id;
      this.router.navigate(['colaborador', 'ea', 'editar', id, 'software']);
    } else {
      this.router.navigate(['colaborador', 'ea', 'novo', 'software']);
    }
  }
}
