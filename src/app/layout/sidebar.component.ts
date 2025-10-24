import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent {
  menu = [
    {
      id: 1,
      titulo: 'CONFIGURACIONES',
      ruta: '/configuraciones',
      orden: 1,
      padre: null,
      subMenu: [
        { id: 101, idMenu: 1, titulo: 'General', ruta: '/configuraciones/general', orden: 4 },
        { id: 102, idMenu: 1, titulo: 'Movimientos', ruta: '/configuraciones/movimientos', orden: 3 },
        { id: 103, idMenu: 1, titulo: 'Información de Empresa', ruta: '/configuraciones/empresa', orden: 2 },
  { id: 104, idMenu: 1, titulo: 'Certificados', ruta: '/configuraciones/certificados', orden: 1 }
      ]
    }
    // Puedes agregar más menús aquí
  ];

  subMenu = [
    { id: 101, idMenu: 1, titulo: 'General', ruta: '/configuraciones/general', orden: 4 },
    { id: 102, idMenu: 1, titulo: 'Movimientos', ruta: '/configuraciones/movimientos', orden: 3 },
    { id: 103, idMenu: 1, titulo: 'Información de Empresa', ruta: '/configuraciones/empresa', orden: 2 },
    { id: 104, idMenu: 1, titulo: 'Certificados', ruta: '/configuraciones/certificados', orden: 1 }
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Ordenar descendente por 'orden'
    this.menu = this.menu.sort((a, b) => b.orden - a.orden);
    this.menu.forEach(m => m.subMenu = m.subMenu.sort((a, b) => b.orden - a.orden));
    this.subMenu = this.subMenu.sort((a, b) => b.orden - a.orden);
  }

  toggleSidebar() {
    const body = document.body;
    if (body.classList.contains('sidebar-toggled')) {
      this.renderer.removeClass(body, 'sidebar-toggled');
    } else {
      this.renderer.addClass(body, 'sidebar-toggled');
    }
    const sidebar = this.el.nativeElement.querySelector('.sidebar');
    if (sidebar) {
      if (sidebar.classList.contains('toggled')) {
        this.renderer.removeClass(sidebar, 'toggled');
      } else {
        this.renderer.addClass(sidebar, 'toggled');
      }
    }
  }

  trackById(index: number, item: any): any {
    return item.id;
  }
}
