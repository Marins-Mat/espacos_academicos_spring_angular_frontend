import { Component, inject, signal } from '@angular/core';
import { Ea, EaService } from '../../../../services/colaborador/ea-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-ea-form-component',
  styleUrl: './ea-form-component.css',
  templateUrl: './ea-form-component.html',
})
export class EaFormComponent {
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
    if(this.isModoEditor) {
      this.eaService.salvar(this.eaForm());
    } else {
      this.eaService.adicionar(this.eaForm());
    }

    this.router.navigate(['colaborador/ea']);
  }
}
