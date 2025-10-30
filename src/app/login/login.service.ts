import { Injectable } from '@angular/core';
import { AuthService, Usuario } from '../services/auth.service';
import { MenuService } from '../services/menu.service';
import { PermisosService } from '../services/permisos.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    private authService: AuthService,
    private menuService: MenuService,
    private permisosService: PermisosService
  ) {}

  // Simula el consumo de un API. Reemplaza la lógica por tu API real.
  login(usuario: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (usuario === 'admin' && password === 'admin') {
          // Simulación de respuesta del backend
          const respuesta = {
            token: 'token123',
            usuario: {
              id: 1,
              nombres: 'Douglas McGee',
              usuario: 'admin',
              idRol: 2,
              rol: 'Administrador',
              correo: 'douglas@empresa.com',
              celular: '999999999'
            },
            menu: [
              { id: 1, nombre: 'Dashboard', ruta: '/dashboard', icono: 'fa-home' },
              { id: 2, nombre: 'Configuraciones', ruta: '/configuraciones', icono: 'fa-cog', hijos: [
                { id: 3, nombre: 'General', ruta: '/configuraciones/general' },
                { id: 4, nombre: 'Movimientos', ruta: '/configuraciones/movimientos' }
              ] }
            ],
            permisos: [
              { id: 1, nombre: 'VER_CONFIGURACIONES' },
              { id: 2, nombre: 'EDITAR_MOVIMIENTOS' }
            ]
          };
          this.authService.setUsuario(respuesta.usuario);
          this.menuService.setMenu(respuesta.menu);
          this.permisosService.setPermisos(respuesta.permisos);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  }
}
