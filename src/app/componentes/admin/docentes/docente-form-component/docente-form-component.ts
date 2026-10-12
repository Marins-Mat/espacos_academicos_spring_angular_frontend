import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Docente, DocenteService } from '../../../../services/admin/docentes/docente-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-docente-form-component',
  styleUrl: './docente-form-component.css',
  templateUrl: './docente-form-component.html',
})
export class DocenteFormComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  docenteService = inject(DocenteService);

  isModoEditor = false;

  docenteForm = signal<Docente>({
    matricula: 0,
    nome: '',
    email: '',
    telefone: '',
    caVinculada: '',
    status: 'Ativo',
    dataCadastro: new Date()
  })

  ngOnInit(): void {
    const matParam = this.route.snapshot.paramMap.get('id');
    if (matParam) {
      const id = Number(matParam);
      const docenteEncontrado = this.docenteService.obterPorId(id);

      if (docenteEncontrado) {

        this.isModoEditor = true;
        this.docenteForm.set({ ...docenteEncontrado });

      } else {
        this.router.navigate(['admin/docentes'])
      }
    }
  }

  salvar() {
    if(this.isModoEditor) {
      this.docenteService.salvar(this.docenteForm());
    } else {
      this.docenteService.adicionar(this.docenteForm());
    }

    this.router.navigate(['admin/docentes']);
  }
}
