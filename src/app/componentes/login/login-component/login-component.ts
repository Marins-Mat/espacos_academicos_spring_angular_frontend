import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  private router = inject(Router)
  email = signal<string>('')
  senha = signal<string>('')
  
  onSubmit(): void {
    console.log("E-mail digitado: ", this.email())
    console.log("Senha digitada: ", this.senha())
    
    this.router.navigate(['colaborador'])
  }
}
