import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ies, IesService } from '../../../../services/admin/ies/ies-service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-ies-form-component',
  styleUrl: './ies-form-component.css',
  templateUrl: './ies-form-component.html',
})
export class IesFormComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private  router = inject(Router);
  private iesService = inject(IesService);

  
  isModoEdicao = false;

  iesForm = signal<Ies>({
    id: 0,
    sigla: '',
    nome: '',
    reitor: '',
    telefone: '',
    email: '',
    status: 'Ativa',
    data: new Date
  })

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId) {
      const id = Number(paramId);
      const iesEncontrada = this.iesService.obterPorId(id);

      if(iesEncontrada) {
        this.isModoEdicao = true;
        this.iesForm.set({ ...iesEncontrada });
      } else {
        this.router.navigate(['admin/ies']);
      }
    }
  }

  salvar() {
    if (this.isModoEdicao){
      this.iesService.salvar(this.iesForm());
    } else {
      this.iesService.adicionar(this.iesForm());
    }

    this.router.navigate(['/admin/ies']);
  }
}
