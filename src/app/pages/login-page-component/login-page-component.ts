import { Component } from '@angular/core';
import { LoginComponent } from '../../componentes/login/login-component/login-component';
import { TitleComponent } from '../../componentes/login/title-component/title-component';

@Component({
  imports: [LoginComponent, TitleComponent],
  selector: 'app-login-page-component',
  styleUrl: './login-page-component.css',
  templateUrl: './login-page-component.html',
})

export class LoginPageComponent {}
