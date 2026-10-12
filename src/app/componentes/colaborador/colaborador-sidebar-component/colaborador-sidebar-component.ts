import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-colaborador-sidebar-component',
  styleUrl: './colaborador-sidebar-component.css',
  templateUrl: './colaborador-sidebar-component.html',
})
export class ColaboradorSidebarComponent {
  menuItens = [
    {label: 'Solicitações', route: '/colaborador/solicitacoes'},
    {label: 'Espaços Acadêmicos', route: '/colaborador/ea'},
    {label: 'Relatórios', route: '/colaborador/relatorios'}
  ]
}
