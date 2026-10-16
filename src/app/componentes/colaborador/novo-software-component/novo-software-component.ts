import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ea, EaService } from '../../../services/colaborador/ea-service';
import { Software } from '../../../services/colaborador/software-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-novo-software-component',
  styleUrl: './novo-software-component.css',
  templateUrl: './novo-software-component.html',
})
export class NovoSoftwareComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  eaService = inject(EaService);

  isModoEditor = false;

  eaForm = signal<Ea>({
    id: 0,
    sigla: '',
    nome: '',
    tipo: 'SALA',
    descricao: '',
    capacidadeMax: 0,
    localizacao: '',
    status: 'DISPONIVEL',
    dataDeCadastramento: new Date()
  })

  softwareForm = signal<Software> ({
    id: 0,
    url: '', 
    nome: '',
    tipo: 'SOFTWARE_LIVRE',
    objetivo: '',
    disciplinas: ''
  })


  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      const eaEncontrada = this.eaService.obterPorId(id);

      if (eaEncontrada) {

        this.isModoEditor = true;
        this.eaForm.set({ ...eaEncontrada });

      } else {
        this.router.navigate(['colaborador/ea'])
      }
    }
  }


  salvar() {

    if (this.isModoEditor) {
      this.eaService.adicionarSoftware(this.eaForm().id, this.softwareForm());
    }

    this.router.navigate(['colaborador/ea']);
  }

  adicionarSoftware() {
  }
}
