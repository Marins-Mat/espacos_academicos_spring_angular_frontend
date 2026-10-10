import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-ies-form-component',
  styleUrl: './ies-form-component.css',
  templateUrl: './ies-form-component.html',
})
export class IesFormComponent {
  router = inject(Router);


  sigla: string = '';
  nome: string = '';
  reitor: string = '';
  email: string = '';
  telefone: string = '';
  
  onSubmit() {
    this.router.navigate(['/admin/ies']);
  }
}
