import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioSidebarComponent } from '../../componentes/usuario/usuario-sidebar-component/usuario-sidebar-component'; 

@Component({
  imports: [RouterOutlet, UsuarioSidebarComponent],
  selector: 'app-usuario-page-component',
  styleUrl: './usuario-page-component.css',
  templateUrl: './usuario-page-component.html',
})
export class UsuarioPageComponent {}
