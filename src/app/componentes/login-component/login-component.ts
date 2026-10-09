import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  
  email = signal<string>('')
  senha = signal<string>('')
  
  onSubmit(): void {
    console.log("E-mail digitado: ", this.email())
    console.log("Senha digitada: ", this.senha())
    this.email.set("")
    this.senha.set("")
  }
}
