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
    { label: 'Espaços Acadêmicos', route: '/colaborador/ea' },
    { label: 'Solicitações de espaço', route: '/colaborador/solicitacoes_espaco' },
    { label: 'Solicitações de software', route: '/colaborador/solicitacoes_software' },
    { label: 'Relatórios', route: '/colaborador/relatorios' }
  ]
}
