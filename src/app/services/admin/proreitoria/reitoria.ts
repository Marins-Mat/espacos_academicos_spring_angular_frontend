import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

export interface proreitoriaRequest {
    nome: string,
    nomeResponsavel: string
}
export interface proreitoriaResponse {
    id: number,
    nome: string,
    nomeResponsavel: string
}


@Service()
export class Reitoria {

    private http = inject(HttpClient)
    private apiUrl = 'http://localhost:8080/api/ies'



}
