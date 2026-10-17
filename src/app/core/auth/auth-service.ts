import { inject, Service, signal } from '@angular/core';
import { PerfilAcesso } from '../../services/usuario-service';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


export interface LoginRequest {
    login: string;
    senha: string;
}

export interface UsuarioAutenticado {
    id: number;
    nome: string;
    roles: string[]; // Ex: ['ADMINISTRADOR', 'COLABORADOR', 'USUARIO']
}

export interface LoginResponse {
    token: string;
    tipo: string;
    usuarioId: number;
    nome: string;
    email: string;
    matricula: string;
    perfis: PerfilAcesso
}

@Service()
export class AuthService {
    private http = inject(HttpClient)
    private apiUrl = 'http://localhost:8080/api/auth/login'

    usuarioAtual = signal<UsuarioAutenticado | null>(null);
    perfilAtivo = signal<string>('');

    constructor() {
        this.carregarSessaoSalva();
    }

    login(credentials: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.apiUrl, credentials).pipe(
            tap(response => {
                // 1. Salva tokens e informações de sessão no storage
                localStorage.setItem('token', response.token);
                localStorage.setItem('perfis', JSON.stringify(response.perfis));
                localStorage.setItem('usuarioId', JSON.stringify(response.usuarioId));
                localStorage.setItem('nome', response.nome || '');

                // Define perfil inicial padrão (primeiro da lista de permissões)
                const perfilInicial = response.perfis[0] || 'USUARIO';
                localStorage.setItem('perfilAtivo', perfilInicial);

                // 2. Atualiza os Signals globais
                this.usuarioAtual.set({
                    id: response.usuarioId,
                    nome: response.nome || '',
                    roles: this.normalizarRoles(response.perfis) || []
                });

                this.perfilAtivo.set(perfilInicial);
            })
        );
    }


    alterarPerfilAtivo(novoPerfil: string): void {
        localStorage.setItem('perfilAtivo', novoPerfil);
        this.perfilAtivo.set(novoPerfil);
    }

    logout(): void {
        localStorage.clear();
        this.usuarioAtual.set(null);
        this.perfilAtivo.set('');
    }

    private normalizarRoles(perfisInput: string | string[] | null | undefined): string[] {
        if (!perfisInput) return [];

        if (Array.isArray(perfisInput)) {
            return perfisInput;
        }

        if (typeof perfisInput === 'string') {
            // Trata tanto "ADMINISTRADOR,COLABORADOR" quanto "ADMINISTRADOR"
            return perfisInput.split(',').map(role => role.trim()).filter(Boolean);
        }

        return [];
    }

    private carregarSessaoSalva(): void {
        const token = localStorage.getItem('token');
        const perfisJson = localStorage.getItem('perfis');
        const usuarioIdJson = localStorage.getItem('usuarioId');
        const nome = localStorage.getItem('nome');
        const perfilAtivoSalvo = localStorage.getItem('perfilAtivo');

        if (token && perfisJson && usuarioIdJson) {
            const roles: string[] = JSON.parse(perfisJson);
            const id: number = JSON.parse(usuarioIdJson);

            this.usuarioAtual.set({
                id,
                nome: nome || '',
                roles
            });

            this.perfilAtivo.set(perfilAtivoSalvo || roles[0] || '');
        }
    }

    obterUsuarioId(): number | null {
        return this.usuarioAtual()?.id ?? null;
    }

    getPerfis(): string[] {
        const perfis = localStorage.getItem('perfis');
        return perfis ? JSON.parse(perfis) : [];
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');

    }
}
