import { Component, inject, signal } from '@angular/core';
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

  sigla = signal<string>('');
  nome = signal<string>('');
  reitor = signal<string>('');
  email = signal<string>('');
  telefone = signal<string>('');
  
  onSubmit(): void {
    console.log(this.sigla())
    console.log(this.nome())
    console.log(this.reitor())
    console.log(this.email())
    console.log(this.telefone())

    this.router.navigate(['/admin/ies']);
  }
}
