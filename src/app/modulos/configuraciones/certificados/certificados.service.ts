import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CertificadosService {
  private apiUrl = 'https://tu-api.com/api/certificados'; // Cambia por tu endpoint real

  constructor(private http: HttpClient) {}

  guardarCertificado(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  obtenerCertificados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
