import { Injectable } from '@angular/core';

export interface MenuItem {
  id: number;
  nombre: string;
  ruta: string;
  icono?: string;
  hijos?: MenuItem[];
}

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menu: MenuItem[] = [];

  setMenu(menu: MenuItem[]) {
    this.menu = menu;
  }

  getMenu(): MenuItem[] {
    return this.menu;
  }
}
