import { Injectable } from '@angular/core';

export interface Permiso {
  id: number;
  nombre: string;
  descripcion?: string;
}

@Injectable({ providedIn: 'root' })
export class PermisosService {
  private permisos: Permiso[] = [];

  setPermisos(permisos: Permiso[]) {
    this.permisos = permisos;
  }

  getPermisos(): Permiso[] {
    return this.permisos;
  }
}
