import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AreasService {
  private apiUrl = '/api/areas'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getAreas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateArea(area: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${area.codigo}`, area);
  }

  deleteArea(codigo: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${codigo}`);
  }
}