import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SubSubCentroCostoService {
  private apiUrl = '/api/sub-sub-centro-costo'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getSubSubCentros(page: number, pageSize: number): Observable<{data: any[], total: number}> {
    return this.http.get<{data: any[], total: number}>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }

  updateSubSubCentro(subSubCentro: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${subSubCentro.codigoSS}`, subSubCentro);
  }

  deleteSubSubCentro(codigoSS: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${codigoSS}`);
  }
}