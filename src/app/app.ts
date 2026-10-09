import { Component, signal } from '@angular/core';
import { LoginComponent } from './componentes/login-component/login-component';

@Component({
  imports: [LoginComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('espacos_academicos');
}
