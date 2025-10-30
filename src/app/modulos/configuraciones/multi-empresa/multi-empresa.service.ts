import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MultiEmpresaService {
  private apiUrl = 'https://tu-api.com/api/multi-empresa'; // Cambia por tu endpoint real

  constructor(private http: HttpClient) {}

  guardarGrupo(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  actualizarGrupo(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminarGrupo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  obtenerGrupos(page: number = 1, pageSize: number = 10): Observable<any> {
    const params = new HttpParams().set('page', page).set('pageSize', pageSize);
    return this.http.get<any>(this.apiUrl, { params });
  }
}
