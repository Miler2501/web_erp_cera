import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  // Simula el consumo de un API. Reemplaza la lógica por tu API real.
  login(usuario: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulación: usuario y password deben ser 'admin'
        resolve(usuario === 'admin' && password === 'admin');
      }, 1000);
    });
  }
}
