import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginRequest } from '../../../core/auth/auth-service';
import { email } from '@angular/forms/signals';

@Component({
  imports: [FormsModule],
  selector: 'app-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  private router = inject(Router)
  private authService = inject(AuthService)

  request = signal<LoginRequest>({
    login: (''),
    senha: ('')
  })
  errorMessage = signal<string>('')

  onSubmit(): void {

    if (!this.request().login || !this.request().senha) return

    this.authService.login(this.request()).subscribe({
      next: (response) => {
        const perfis = response.perfis || []

        if (perfis.includes('ADMINISTRADOR')) {
          this.router.navigate(['/admin']);
        } else if (perfis.includes('COLABORADOR')) {
          this.router.navigate(['/colaborador']);
        } else if (perfis.includes('USUARIO')) {
          this.router.navigate(['/usuario']);
        } else {
          this.router.navigate(['/login']);
        }

      },
      error: (err) => {
        console.error('Erro na autenticação', err)
        console.log(this.errorMessage.set(err.error?.message || 'E-mail ou senha incorretos.'))
      }
    })
  }

  
}
