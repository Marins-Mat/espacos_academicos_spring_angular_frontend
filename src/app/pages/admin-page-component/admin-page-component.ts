import { Component, inject } from '@angular/core';
import { AdminSidebarComponent } from '../../componentes/admin/admin-sidebar-component/admin-sidebar-component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [AdminSidebarComponent, RouterOutlet],
  selector: 'app-admin-page-component',
  styleUrl: './admin-page-component.css',
  templateUrl: './admin-page-component.html',
})
export class AdminPageComponent {}
