import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CierreProcesosService {
  private apiUrl = 'https://tu-api.com/cierre-procesos'; // Reemplaza por tu endpoint real

  constructor(private http: HttpClient) {}

  guardarCierrePeriodo(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
