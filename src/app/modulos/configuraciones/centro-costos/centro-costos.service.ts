import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CentroCostosService {
  private apiUrl = 'https://tu-api.com/api/centro-costos-usuarios'; // Cambia por tu endpoint real

  constructor(private http: HttpClient) {}

  asignarCentroCostos(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
