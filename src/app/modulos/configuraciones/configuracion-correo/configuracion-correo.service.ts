import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfiguracionCorreoService {
  private apiUrl = 'https://tu-api.com/configuracion-correo'; // Reemplaza por tu endpoint real
  private estructuraUrl = 'https://tu-api.com/configuracion-correo/estructura-mensaje'; // Endpoint ejemplo

  constructor(private http: HttpClient) {}

  obtenerCorreos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerEstructuraMensaje(): Observable<any> {
    return this.http.get<any>(this.estructuraUrl);
  }

  guardarEstructuraMensaje(data: any): Observable<any> {
    return this.http.post(this.estructuraUrl, data);
  }

  guardarCorreo(correo: any): Observable<any> {
    return this.http.post(this.apiUrl, correo);
  }

  modificarCorreo(id: string, correo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, correo);
  }

  eliminarCorreo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
