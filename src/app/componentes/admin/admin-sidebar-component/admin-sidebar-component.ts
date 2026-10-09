import { getLocaleNumberFormat } from '@angular/common';
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
    {label: 'Instituições (IES)', route: '/ies'},
    {label: 'Centros Acadêmicos', route: '/centros'},
    {label: 'Cursos', route: '/cursos'},
    {label: 'Docentes', route: '/docentes'},
    {label: 'Usuários e Perfis', route: '/usuarios'},
    {label: 'Auditoria', route: '/auditoria'},
    {label: 'Relatórios', route: '/relatorios'}
  ]


}
