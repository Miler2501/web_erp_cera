import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InfoEmpresaService {
  private apiUrl = 'https://tu-api.com/api/info-empresa'; // Cambia por tu endpoint real

  constructor(private http: HttpClient) {}

  guardarInfoEmpresa(data: any): Observable<any> {
    // Si el logo es base64, puedes enviar todo como JSON
    return this.http.post(this.apiUrl, data);
  }

  // Si prefieres enviar el archivo como multipart/form-data:
  guardarInfoEmpresaFormData(data: any, logoFile: File): Observable<any> {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key !== 'rutaLogo') formData.append(key, data[key]);
    });
    formData.append('logo', logoFile);
    return this.http.post(this.apiUrl, formData);
  }
}
