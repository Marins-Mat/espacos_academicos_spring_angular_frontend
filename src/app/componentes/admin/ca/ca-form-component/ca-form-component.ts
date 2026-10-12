import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ca, CaService } from '../../../../services/admin/ca/ca-service';
import { FormsModule } from '@angular/forms';

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

  isModoEditor = false;

  caForm = signal<Ca>({
    id: 0,
    nome: '',
    coordenador: '',
    IesVinculada: '',
    email: '',
    telefone: '',
    status: 'Ativo',
    dataDeCadastramento: new Date()
  })

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      const caEncontrada = this.caService.obterPorId(id);

      if (caEncontrada) {

        this.isModoEditor = true;
        this.caForm.set({ ...caEncontrada });

      } else {
        this.router.navigate(['admin/ca'])
      }
    }
  }

  salvar() {
    if(this.isModoEditor) {
      this.caService.salvar(this.caForm());
    } else {
      this.caService.adicionar(this.caForm());
    }

    this.router.navigate(['admin/ca']);
  }
}
