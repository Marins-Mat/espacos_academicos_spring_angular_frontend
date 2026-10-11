import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page-component/login-page-component';
import { AdminPageComponent } from './pages/admin-page-component/admin-page-component';
import { IesParentComponent } from './componentes/admin/ies-parent-component/ies-parent-component';
import { IesListComponent } from './componentes/admin/ies-list-component/ies-list-component';
import { IesFormComponent } from './componentes/admin/ies-form-component/ies-form-component';

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
            }
        ]
    },

];
