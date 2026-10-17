import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Curso, CursoService } from '../../../../services/admin/curso/curso-service';
import { FormsModule } from '@angular/forms';
import { Ca, CaService } from '../../../../services/admin/ca/ca-service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-curso-form-component',
  styleUrl: './curso-form-component.css',
  templateUrl: './curso-form-component.html',
})
export class CursoFormComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  cursoService = inject(CursoService);
  caService = inject(CaService)

  isModoEditor = false;


  cursoForm = signal<Curso>({
    sigla: '',
    nomeCoordenador: '',
    centroAcademicoId: 1,
    centroAcademicoNome: '',
    descricao: '',
    turno: 'INTEGRAL',
  })

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const id = Number(idParam);
      this.isModoEditor = true;

      this.cursoService.obterPorId(id).subscribe({
        next: (cursoEncontrada: Curso) => {

          let dataFormatada: any = cursoEncontrada.dataCadastramento;
          if (dataFormatada) {
            dataFormatada = new Date(dataFormatada).toISOString().split('T')[0];
          }

          this.cursoForm.set({
            id: cursoEncontrada.id,
            sigla: cursoEncontrada.sigla,
            nomeCoordenador: cursoEncontrada.nomeCoordenador,
            centroAcademicoId: cursoEncontrada.centroAcademicoId,
            centroAcademicoNome: cursoEncontrada.centroAcademicoNome,
            descricao: cursoEncontrada.descricao,
            turno: cursoEncontrada.turno,
            dataCadastramento: dataFormatada,
            status: cursoEncontrada.status
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
      this.cursoService.salvar(this.cursoForm()).subscribe();;
    } else {
      this.cursoService.adicionar(this.cursoForm()).subscribe();
    }

    this.router.navigate(['admin/curso']);
  }
}






