import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DocenteService } from '../../../../services/admin/docentes/docente-service';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../../services/usuario-service';
import { Ca, CaService } from '../../../../services/admin/ca/ca-service';

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
  caService = inject(CaService)

  isModoEditor = false;

  docenteForm = signal<Usuario>({
    matricula: '',
    nomeCompleto: '',
    email: '',
    senha: '',
    telefone: '',
    centroAcademicoId: 1,
    perfis: []
  })

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');


    if (idParam) {
      const id = Number(idParam);
      this.isModoEditor = true;

      this.docenteService.obterPorId(id).subscribe({
        next: (docenteEncontrado: Usuario) => {

          let dataFormatada: any = docenteEncontrado.dataCadastramento;
          if (dataFormatada) {
            dataFormatada = new Date(dataFormatada).toISOString().split('T')[0];
          }

          this.docenteForm.set({
            id: docenteEncontrado.id,
            matricula: docenteEncontrado.matricula,
            nomeCompleto: docenteEncontrado.nomeCompleto,
            centroAcademicoId: docenteEncontrado.centroAcademicoId,
            centroAcademicoNome: docenteEncontrado.centroAcademicoNome,
            telefone: docenteEncontrado.telefone,
            email: docenteEncontrado.email,
            dataCadastramento: dataFormatada,
            perfis: docenteEncontrado.perfis,
            status: docenteEncontrado.status,
            motivoInativacao: docenteEncontrado.motivoInativacao
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
      this.docenteService.salvar(this.docenteForm()).subscribe();;
    } else {
      this.docenteService.adicionar(this.docenteForm()).subscribe();
    }

    this.router.navigate(['admin/docentes']);
  }
}
