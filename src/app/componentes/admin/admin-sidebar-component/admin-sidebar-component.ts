import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-admin-sidebar-component',
  styleUrl: './admin-sidebar-component.css',
  templateUrl: './admin-sidebar-component.html',
})
export class AdminSidebarComponent {
  menuItens = [
    {label: 'Instituições (IES)', route: '/admin/ies'},
    {label: 'Centros Acadêmicos', route: '/admin/ca'},
    {label: 'Cursos', route: '/admin/curso'},
    {label: 'Docentes', route: '/admin/docentes'},
    {label: 'Auditoria', route: '/admin/auditoria'},
    {label: 'Relatórios', route: '/admin/relatorios'}
  ]
}
