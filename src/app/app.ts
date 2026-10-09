import { Component, signal } from '@angular/core';
import { LoginComponent } from './componentes/login-component/login-component';
import { TitleComponent } from './componentes/title-component/title-component';

@Component({
  imports: [LoginComponent, TitleComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('espacos_academicos');
}
