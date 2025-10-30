import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SubCentroCostoService {
  private apiUrl = '/api/sub-centro-costo'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getSubCentros(page: number, pageSize: number): Observable<{data: any[], total: number}> {
    return this.http.get<{data: any[], total: number}>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }

  updateSubCentro(subCentro: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${subCentro.codigo}`, subCentro);
  }

  deleteSubCentro(codigo: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${codigo}`);
  }
}