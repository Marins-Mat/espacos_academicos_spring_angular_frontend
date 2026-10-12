import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Curso, CursoService } from '../../../../services/admin/curso/curso-service';
import { FormsModule } from '@angular/forms';

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

  isModoEditor = false;

  turnoMat = signal<Boolean>(false)
  turnoVes = signal<Boolean>(false)
  turnoNot = signal<Boolean>(false)



  cursoForm = signal<Curso>({
    id: 0,
    sigla: '',
    coordenador: '',
    caVinculada: '',
    descricao: '',
    status: 'Ativo',
    turnos: [this.turnoMat(), this.turnoVes(), this.turnoNot()],
    dataCadastro: new Date()
  })

  ngOnInit(): void {


    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      const cursoEncontrado = this.cursoService.obterPorId(id);

      if (cursoEncontrado) {

        this.isModoEditor = true;
        this.cursoForm.set({ ...cursoEncontrado });

        if (cursoEncontrado.turnos) {
          this.turnoMat.set(cursoEncontrado.turnos[0] ?? false);
          this.turnoVes.set(cursoEncontrado.turnos[1] ?? false);
          this.turnoNot.set(cursoEncontrado.turnos[2] ?? false);
        }
      } else {
        this.router.navigate(['admin/curso']);
      }

    }
  }

  salvar(): void {
    const turnosAtualizados = [
      this.turnoMat(),
      this.turnoVes(),
      this.turnoNot()
    ];

    const cursoParaSalvar: Curso = {
      ...this.cursoForm(),
      turnos: turnosAtualizados
    };

    if (this.isModoEditor) {
      this.cursoService.salvar(cursoParaSalvar);
    } else {
      this.cursoService.adicionar(cursoParaSalvar);
    }

    this.router.navigate(['admin/curso']);
  }
}






