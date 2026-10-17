import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PerfilAcesso } from '../../admin/admin-sidebar-component/admin-sidebar-component'; 
import { AuthService } from '../../../core/auth/auth-service';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-colaborador-sidebar-component',
  styleUrl: './colaborador-sidebar-component.css',
  templateUrl: './colaborador-sidebar-component.html',
})
export class ColaboradorSidebarComponent {
    private router = inject(Router);
  private authService = inject(AuthService);

  private todosPerfis: PerfilAcesso[] = [
    { label: 'Administrador', value: 'ADMINISTRADOR', rotaInicial: '/admin/ies' },
    { label: 'Colaborador', value: 'COLABORADOR', rotaInicial: '/colaborador/solicitacoes_espaco' },
    { label: 'Usuário', value: 'USUARIO', rotaInicial: '/usuario/solicitacoes_espaco' }
  ];

  // Filtra apenas os perfis que constam no array de roles do usuarioAtual
  readonly perfisDisponiveis = computed(() => {
    const usuario = this.authService.usuarioAtual();
    if (!usuario || !usuario.roles) return [];

    return this.todosPerfis.filter(perfil => usuario.roles.includes(perfil.value));
  });

  // Lê o perfil selecionado atualmente do AuthService
  readonly perfilAtual = this.authService.perfilAtivo;

  menuItens = [
    { label: 'Espaços acadêmicos', route: '/colaborador/ea' },
    { label: 'Solicitações de espaços acadêmicos', route: '/colaborador/solicitacoes_espaco' },
    { label: 'Solicitações de softwares', route: '/colaborador/solicitacoes_software' },
    { label: 'Relatórios', route: '/colaborador/relatorios' }
  ];

  trocarPerfil(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const novoPerfilValue = selectElement.value;

    const perfilEncontrado = this.todosPerfis.find(p => p.value === novoPerfilValue);

    if (perfilEncontrado) {
      // Atualiza o estado global no AuthService
      this.authService.alterarPerfilAtivo(novoPerfilValue);

      // Redireciona para a área inicial do perfil selecionado
      this.router.navigate([perfilEncontrado.rotaInicial]);
    }
  }
}
