import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page-component/login-page-component';
import { AdminPageComponent } from './pages/admin-page-component/admin-page-component';
import { IesParentComponent } from './componentes/admin/ies/ies-parent-component/ies-parent-component';
import { IesListComponent } from './componentes/admin/ies/ies-list-component/ies-list-component';
import { IesFormComponent } from './componentes/admin/ies/ies-form-component/ies-form-component';
import { CaParentComponent } from './componentes/admin/ca/ca-parent-component/ca-parent-component';
import { CaListComponent } from './componentes/admin/ca/ca-list-component/ca-list-component';
import { CaFormComponent } from './componentes/admin/ca/ca-form-component/ca-form-component';
import { CursoParentComponent } from './componentes/admin/curso/curso-parent-component/curso-parent-component';
import { CursoListComponent } from './componentes/admin/curso/curso-list-component/curso-list-component';
import { Component } from '@angular/core';
import { CursoFormComponent } from './componentes/admin/curso/curso-form-component/curso-form-component';
import { DocenteParentComponent } from './componentes/admin/docentes/docente-parent-component/docente-parent-component';
import { DocenteListComponent } from './componentes/admin/docentes/docente-list-component/docente-list-component';
import { DocenteFormComponent } from './componentes/admin/docentes/docente-form-component/docente-form-component';
import { ColaboradorPageComponent } from './pages/colaborador-page-component/colaborador-page-component';
import { SolicitacoesParentComponent } from './componentes/colaborador/solicitacoes/solicitacoes-parent-component/solicitacoes-parent-component';
import { SolicitacoesListComponent } from './componentes/colaborador/solicitacoes/solicitacoes-list-component/solicitacoes-list-component';
import { SolicitacoesJustifyComponent } from './componentes/colaborador/solicitacoes/solicitacoes-justify-component/solicitacoes-justify-component';
import { EaParentComponent } from './componentes/colaborador/ea/ea-parent-component/ea-parent-component';
import { EaListComponent } from './componentes/colaborador/ea/ea-list-component/ea-list-component';
import { EaFormComponent } from './componentes/colaborador/ea/ea-form-component/ea-form-component';
import { TabelaSoftwaresComponent } from './componentes/colaborador/tabela-softwares-component/tabela-softwares-component';
import { NovoSoftwareComponent } from './componentes/colaborador/novo-software-component/novo-software-component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    {
        path: 'admin', component: AdminPageComponent,
        children: [
            { path: '', redirectTo: 'ies', pathMatch: 'full' },
            {
                path: 'ies', component: IesParentComponent,
                children: [
                    { path: '', component: IesListComponent },
                    { path: 'nova', component: IesFormComponent },
                    { path: 'editar/:id', component: IesFormComponent }
                ]
            },
            {
                path: 'ca', component: CaParentComponent,
                children: [
                    { path: '', component: CaListComponent },
                    { path: 'novo', component: CaFormComponent },
                    { path: 'editar/:id', component: CaFormComponent }
                ]
            },
            {
                path: 'curso', component: CursoParentComponent,
                children: [
                    { path: '', component: CursoListComponent },
                    { path: 'novo', component: CursoFormComponent },
                    { path: 'editar/:id', component: CursoFormComponent }
                ]
            },
            {
                path: 'docentes', component: DocenteParentComponent,
                children: [
                    { path: '', component: DocenteListComponent },
                    { path: 'novo', component: DocenteFormComponent },
                    { path: 'editar/:id', component: DocenteFormComponent }
                ]
            }
        ]
    },
    {
        path: 'colaborador', component: ColaboradorPageComponent,
        children: [
            { path: '', redirectTo: 'ea', pathMatch: 'full' },
            {
                path: 'solicitacoes', component: SolicitacoesParentComponent,
                children: [
                    { path: '', component: SolicitacoesListComponent },
                    { path: 'justificativa/:id', component: SolicitacoesJustifyComponent }
                ]
            },
            {
                path: 'ea', component: EaParentComponent,
                children: [
                    { path: '', component: EaListComponent },
                    {
                        path: 'novo', component: EaFormComponent,
                        children: [
                            { path: '', component: TabelaSoftwaresComponent },
                            { path: 'software', component: NovoSoftwareComponent }
                        ]
                    },
                    { path: 'editar/:id', component: EaFormComponent,
                        children: [
                            { path: '', component: TabelaSoftwaresComponent },
                            { path: 'software', component: NovoSoftwareComponent }
                        ]
                     }
                ]
            }

        ]
    }

];
