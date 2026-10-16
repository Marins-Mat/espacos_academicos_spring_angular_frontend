import { inject, Service } from '@angular/core';
import { PerfilAcesso } from '../../usuario-service';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
export interface LoginRequest {
    login: string;
    senha: string;
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

    login(credentials: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.apiUrl, credentials).pipe(tap(response => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('perfis', JSON.stringify(response.perfis));
        }))
    }

    getPerfis(): string[] {
        const perfis = localStorage.getItem('perfis');
        return perfis ? JSON.parse(perfis) : [];
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    logout(): void {
        localStorage.clear();
    }

}
