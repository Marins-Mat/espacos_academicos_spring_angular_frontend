import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../../componentes/admin/admin-sidebar-component/admin-sidebar-component';

@Component({
  imports: [AdminSidebarComponent],
  selector: 'app-admin-page-component',
  styleUrl: './admin-page-component.css',
  templateUrl: './admin-page-component.html',
})
export class AdminPageComponent {}
