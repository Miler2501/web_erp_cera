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
      padre: 1,
      subMenu: [
        { id: 101, idMenu: 1, titulo: 'General', ruta: '/configuraciones/general', orden: 4 },
        { id: 102, idMenu: 1, titulo: 'Movimientos', ruta: '/configuraciones/movimientos', orden: 3 },
        { id: 103, idMenu: 1, titulo: 'Información de Empresa', ruta: '/configuraciones/empresa', orden: 2 },
        { id: 104, idMenu: 1, titulo: 'Certificados', ruta: '/configuraciones/certificados', orden: 1 },
        { id: 105, idMenu: 1, titulo: 'MultiEmpresa', ruta: '/configuraciones/multi-empresa', orden: 0 },
        { id: 106, idMenu: 1, titulo: 'Asignar Centro de Costos', ruta: '/configuraciones/centro-costos', orden: -1 },
        { id: 107, idMenu: 1, titulo: 'Cierre de Procesos', ruta: '/configuraciones/cierre-procesos', orden: -2 },
        { id: 108, idMenu: 1, titulo: 'Configuración de Correo', ruta: '/configuraciones/configuracion-correo', orden: -3 }
      ]
    },
    {
      id: 2,
      titulo: 'MANTENIMIENTOS',
      ruta: '/mantenimientos',
      orden: 2,
      padre: 1,
      subMenu: [
        { id: 201, idMenu: 2, titulo: 'Áreas', ruta: '/mantenimientos/areas', orden: 1 },
        { id: 202, idMenu: 2, titulo: 'Centro de Costo', ruta: '/mantenimientos/centro-costo', orden: 2 },
        { id: 203, idMenu: 2, titulo: 'Sub Centro de Costo', ruta: '/mantenimientos/sub-centro-costo', orden: 3 },
        { id: 204, idMenu: 2, titulo: 'Sub Sub Centro de Costo', ruta: '/mantenimientos/sub-sub-centro-costo', orden: 4 },
        { id: 205, idMenu: 2, titulo: 'Porcentaje de Impuestos', ruta: '/mantenimientos/porcentaje-impuestos', orden: 5 },
        { id: 206, idMenu: 2, titulo: 'Empresas', ruta: '/mantenimientos/empresas', orden: 6 },
        { id: 207, idMenu: 2, titulo: 'Plan de Cuentas', ruta: '/mantenimientos/plan-cuentas', orden: 7 },
        { id: 208, idMenu: 2, titulo: 'Serie de Documentos', ruta: '/mantenimientos/serie-documentos', orden: 8 },
        { id: 209, idMenu: 2, titulo: 'Numeraciones Autorizadas', ruta: '/mantenimientos/numeraciones-autorizadas', orden: 9 },
        { id: 210, idMenu: 2, titulo: 'Monedas', ruta: '/mantenimientos/monedas', orden: 10 },
        { id: 211, idMenu: 2, titulo: 'Tipo de Cambios', ruta: '/mantenimientos/tipo-cambios', orden: 11 },
        { id: 212, idMenu: 2, titulo: 'Tipo de Documentos', ruta: '/mantenimientos/tipo-documentos', orden: 12 },
        { id: 213, idMenu: 2, titulo: 'Tipo de Documento de Identidad', ruta: '/mantenimientos/tipo-documento-identidad', orden: 13 },
        { id: 214, idMenu: 2, titulo: 'Países', ruta: '/mantenimientos/paises', orden: 14 },
        { id: 215, idMenu: 2, titulo: 'Marcas', ruta: '/mantenimientos/marcas', orden: 15 },
        { id: 216, idMenu: 2, titulo: 'Clases', ruta: '/mantenimientos/clases', orden: 16 },
        { id: 217, idMenu: 2, titulo: 'Sub Clases', ruta: '/mantenimientos/sub-clases', orden: 17 },
        { id: 218, idMenu: 2, titulo: 'Sub Sub Clases', ruta: '/mantenimientos/sub-sub-clases', orden: 18 },
        { id: 219, idMenu: 2, titulo: 'Tipo de Operación', ruta: '/mantenimientos/tipo-operacion', orden: 19 },
        { id: 220, idMenu: 2, titulo: 'Tipo de Existencia', ruta: '/mantenimientos/tipo-existencia', orden: 20 },
        { id: 221, idMenu: 2, titulo: 'Concepto de Costos', ruta: '/mantenimientos/concepto-costos', orden: 21 },
        { id: 222, idMenu: 2, titulo: 'Ejercicio', ruta: '/mantenimientos/ejercicio', orden: 22 },
        { id: 223, idMenu: 2, titulo: 'Estados de Actividad', ruta: '/mantenimientos/estados-actividad', orden: 23 },
        { id: 224, idMenu: 2, titulo: 'Formas de Pago Provisión', ruta: '/mantenimientos/formas-pago-provision', orden: 24 },
        { id: 225, idMenu: 2, titulo: 'Formas de Pago Cancelación', ruta: '/mantenimientos/formas-pago-cancelacion', orden: 25 },
        { id: 226, idMenu: 2, titulo: 'Medios de Pago', ruta: '/mantenimientos/medios-pago', orden: 26 },
        { id: 227, idMenu: 2, titulo: 'Tasa de Retención', ruta: '/mantenimientos/tasa-retencion', orden: 27 },
        { id: 228, idMenu: 2, titulo: 'Choferes', ruta: '/mantenimientos/choferes', orden: 28 },
        { id: 229, idMenu: 2, titulo: 'Tipos de Documentos Sunat', ruta: '/mantenimientos/tipos-documentos-sunat', orden: 29 },
        { id: 230, idMenu: 2, titulo: 'Categorias', ruta: '/mantenimientos/categorias', orden: 30 },
        { id: 231, idMenu: 2, titulo: 'Unidad de Medida', ruta: '/mantenimientos/unidad-medida', orden: 31 }
      ]
    }
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Ordenar descendente por 'orden'
    this.menu = this.menu.sort((a, b) => b.orden - a.orden);
    this.menu.forEach(m => m.subMenu = m.subMenu.sort((a, b) => b.orden - a.orden));
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
