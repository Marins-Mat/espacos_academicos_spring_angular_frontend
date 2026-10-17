import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/auth-service';  // Ajuste o caminho do seu serviço

export interface PerfilAcesso {
  label: string;
  value: string;
  rotaInicial: string;
}

@Component({
  selector: 'app-admin-sidebar-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './admin-sidebar-component.html',
  styleUrl: './admin-sidebar-component.css',
})
export class AdminSidebarComponent {
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
    { label: 'Instituições (IES)', route: '/admin/ies' },
    { label: 'Centros Acadêmicos', route: '/admin/ca' },
    { label: 'Cursos', route: '/admin/curso' },
    { label: 'Docentes', route: '/admin/docentes' },
    { label: 'Auditoria', route: '/admin/auditoria' },
    { label: 'Relatórios', route: '/admin/relatorios' }
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