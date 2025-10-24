import { Injectable } from '@angular/core';

export interface Usuario {
  id: number;
  nombres: string;
  usuario: string;
  idRol: number;
  rol: string;
  correo: string;
  celular: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuario: Usuario | null = null;

  setUsuario(usuario: Usuario) {
    this.usuario = usuario;
  }

  getUsuario(): Usuario | null {
    return this.usuario;
  }
}
