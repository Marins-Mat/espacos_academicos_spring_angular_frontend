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
import { CursoFormComponent } from './componentes/admin/curso/curso-form-component/curso-form-component';
import { DocenteParentComponent } from './componentes/admin/docentes/docente-parent-component/docente-parent-component';
import { DocenteListComponent } from './componentes/admin/docentes/docente-list-component/docente-list-component';
import { DocenteFormComponent } from './componentes/admin/docentes/docente-form-component/docente-form-component';
import { ColaboradorPageComponent } from './pages/colaborador-page-component/colaborador-page-component';
import { EaParentComponent } from './componentes/colaborador/ea/ea-parent-component/ea-parent-component';
import { EaListComponent } from './componentes/colaborador/ea/ea-list-component/ea-list-component';
import { EaFormComponent } from './componentes/colaborador/ea/ea-form-component/ea-form-component';
import { TabelaSoftwaresComponent } from './componentes/colaborador/tabela-softwares-component/tabela-softwares-component';
import { NovoSoftwareComponent } from './componentes/colaborador/novo-software-component/novo-software-component';
import { SolicitacaoEspacoParentComponent } from './componentes/colaborador/solicitacoes/espaco/solicitacao-espaco-parent-component/solicitacao-espaco-parent-component';
import { SolicitacaoEspacoListComponent } from './componentes/colaborador/solicitacoes/espaco/solicitacao-espaco-list-component/solicitacao-espaco-list-component';
import { SolicitacaoEspacoJustComponent } from './componentes/colaborador/solicitacoes/espaco/solicitacao-espaco-just-component/solicitacao-espaco-just-component';
import { SolicitacaoSoftwareParentComponent } from './componentes/colaborador/solicitacoes/software/solicitacao-software-parent-component/solicitacao-software-parent-component';
import { SolicitacaoSoftwareListComponent } from './componentes/colaborador/solicitacoes/software/solicitacao-software-list-component/solicitacao-software-list-component';
import { SolicitacaoSoftwareJustComponent } from './componentes/colaborador/solicitacoes/software/solicitacao-software-just-component/solicitacao-software-just-component';
import { UsuarioPageComponent } from './pages/usuario-page-component/usuario-page-component';
import { SolicitacaoEspacoUsuarioParentComponent } from './componentes/usuario/solicitacoes/solicitacao-espaco/solicitacao-espaco-usuario-parent-component/solicitacao-espaco-usuario-parent-component';
import { SolicitacaoSoftwareUsuarioParentComponent } from './componentes/usuario/solicitacoes/solicitacao-software/solicitacao-software-usuario-parent-component/solicitacao-software-usuario-parent-component';
import { SolicitacaoEspacoUsuarioListComponent } from './componentes/usuario/solicitacoes/solicitacao-espaco/solicitacao-espaco-usuario-list-component/solicitacao-espaco-usuario-list-component';
import { SolicitacaoEspacoUsuarioFormComponent } from './componentes/usuario/solicitacoes/solicitacao-espaco/solicitacao-espaco-usuario-form-component/solicitacao-espaco-usuario-form-component';
import { SolicitacaoSoftwareUsuarioListComponent } from './componentes/usuario/solicitacoes/solicitacao-software/solicitacao-software-usuario-list-component/solicitacao-software-usuario-list-component';
import { SolicitacaoSoftwareUsuarioFormComponent } from './componentes/usuario/solicitacoes/solicitacao-software/solicitacao-software-usuario-form-component/solicitacao-software-usuario-form-component';
import { SolicitacaoSoftwareUsuarioJustComponent } from './componentes/usuario/solicitacoes/solicitacao-software/solicitacao-software-usuario-just-component/solicitacao-software-usuario-just-component';
import { SolicitacaoEspacoUsuarioJustComponent } from './componentes/usuario/solicitacoes/solicitacao-espaco/solicitacao-espaco-usuario-just-component/solicitacao-espaco-usuario-just-component';
import { AuditoriaComponent } from './componentes/admin/relatorio-auditoria/auditoria-component/auditoria-component';

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
            },
            { path: 'auditoria', component: AuditoriaComponent}
        ]
    },
    {
        path: 'colaborador', component: ColaboradorPageComponent,
        children: [
            { path: '', redirectTo: 'ea', pathMatch: 'full' },
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
                    {
                        path: 'editar/:id', component: EaFormComponent,
                        children: [
                            { path: '', component: TabelaSoftwaresComponent },
                            { path: 'software', component: NovoSoftwareComponent }
                        ]
                    }
                ]
            },
            {
                path: 'solicitacoes_espaco', component: SolicitacaoEspacoParentComponent,
                children: [
                    {
                        path: '', component: SolicitacaoEspacoListComponent,
                        children: [
                            { path: 'justificativa/:id', component: SolicitacaoEspacoJustComponent }
                        ]
                    }
                ]
            },
            {
                path: 'solicitacoes_software', component: SolicitacaoSoftwareParentComponent,
                children: [
                    {
                        path: '', component: SolicitacaoSoftwareListComponent,
                        children: [
                            { path: 'justificativa/:id', component: SolicitacaoSoftwareJustComponent }
                        ]
                    }
                ]
            }

        ]
    },
    {
        path: 'usuario', component: UsuarioPageComponent,
        children: [
            { path: '', redirectTo: 'solicitacoes_espaco', pathMatch: 'full' },
            {
                path: 'solicitacoes_espaco', component: SolicitacaoEspacoUsuarioParentComponent,
                children: [
                    {
                        path: '', component: SolicitacaoEspacoUsuarioListComponent,
                        children: [
                            { path: 'novo', component: SolicitacaoEspacoUsuarioFormComponent },
                            { path: 'editar/:id', component: SolicitacaoEspacoUsuarioFormComponent },
                            { path: 'justificativa/:id', component: SolicitacaoEspacoUsuarioJustComponent }
                        ]
                    }
                ]
            },
            {
                path: 'solicitacoes_software', component: SolicitacaoSoftwareUsuarioParentComponent,
                children: [
                    {
                        path: '', component: SolicitacaoSoftwareUsuarioListComponent,
                        children: [
                            { path: 'novo', component: SolicitacaoSoftwareUsuarioFormComponent },
                            { path: 'editar/:id', component: SolicitacaoSoftwareUsuarioFormComponent },
                            { path: 'justificativa/:id', component: SolicitacaoSoftwareUsuarioJustComponent }
                        ]
                    }
                ]
            }
        ]
    }

];
