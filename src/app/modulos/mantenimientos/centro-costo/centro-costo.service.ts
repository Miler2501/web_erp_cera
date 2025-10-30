import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CentroCostoService {
  private apiUrl = '/api/centro-costo'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getCentros(page: number, pageSize: number): Observable<{data: any[], total: number}> {
    return this.http.get<{data: any[], total: number}>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }

  updateCentro(centro: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${centro.codigo}`, centro);
  }

  deleteCentro(codigo: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${codigo}`);
  }
}