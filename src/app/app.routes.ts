import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page-component/login-page-component';
import { AdminPageComponent } from './pages/admin-page-component/admin-page-component';
import { IesParentComponent } from './componentes/admin/ies/ies-parent-component/ies-parent-component';
import { IesListComponent } from './componentes/admin/ies/ies-list-component/ies-list-component';
import { IesFormComponent } from './componentes/admin/ies/ies-form-component/ies-form-component';
import { CaParentComponent } from './componentes/admin/ca/ca-parent-component/ca-parent-component';
import { CaListComponent } from './componentes/admin/ca/ca-list-component/ca-list-component';
import { CaFormComponent } from './componentes/admin/ca/ca-form-component/ca-form-component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'admin', component: AdminPageComponent,
        children: [
            { path: '', redirectTo: 'ies', pathMatch:'full'},
            {
                path: 'ies', component: IesParentComponent,
                children: [
                    { path: '', component: IesListComponent },
                    { path: 'nova', component: IesFormComponent },
                    { path: 'editar/:id', component: IesFormComponent}
                ]
            }, 
            { path: 'ca', component: CaParentComponent,
                children: [
                    { path: '', component: CaListComponent},
                    { path: 'novo', component: CaFormComponent},
                    { path: 'editar/:id', component: CaFormComponent}
                ]
             }
        ]
    },

];
