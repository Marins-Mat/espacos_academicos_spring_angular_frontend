import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-usuario-sidebar-component',
  styleUrl: './usuario-sidebar-component.css',
  templateUrl: './usuario-sidebar-component.html',
})
export class UsuarioSidebarComponent {
  menuItens = [
    { label: 'Solicitações de espaço', route: '/usuario/solicitacoes_espaco' },
    { label: 'Solicitações de software', route: '/usuario/solicitacoes_software' },
    { label: 'Relatórios', route: '/usuario/relatorios' }
  ]
}
