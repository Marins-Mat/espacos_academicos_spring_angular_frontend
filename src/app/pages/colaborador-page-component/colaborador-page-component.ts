import { Component } from '@angular/core';
import { ColaboradorSidebarComponent } from '../../componentes/colaborador/colaborador-sidebar-component/colaborador-sidebar-component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [ColaboradorSidebarComponent, RouterOutlet],
  selector: 'app-colaborador-page-component',
  styleUrl: './colaborador-page-component.css',
  templateUrl: './colaborador-page-component.html',
})
export class ColaboradorPageComponent {}
