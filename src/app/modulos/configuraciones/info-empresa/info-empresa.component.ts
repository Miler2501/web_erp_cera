import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InfoEmpresaService } from './info-empresa.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-info-empresa',
  standalone: true,
  templateUrl: './info-empresa.component.html',
  styleUrls: ['./info-empresa.component.css'],
  imports: [ReactiveFormsModule, HttpClientModule]
})
export class InfoEmpresaComponent {
  form: FormGroup;
  logoPreview: string | ArrayBuffer | null = null;
  logoFile: File | null = null;

  constructor(private fb: FormBuilder, private infoEmpresaService: InfoEmpresaService) {
    this.form = this.fb.group({
      ruc: ['', Validators.required],
      fechaInicio: [''],
      razonSocial: ['', Validators.required],
      ejercicio: [''],
      nombreComercial: [''],
      direccion: [''],
      urbanizacion: [''],
      pais: [''],
      ubigeo: [''],
      telefono: [''],
      correo: [''],
      sector: [''],
      representanteLegal: [''],
      paginaEmpresa: [''],
      cuentaBancaria: [''],
      tipoDocRepresentante: [''],
      numTipoDoc: [''],
      participaciones: [''],
      monedaPrincipal: [''],
      monedaSecundaria: [''],
      agenteRetencion: [false],
      agentePercepcion: [false],
      buenContribuyente: [false],
      firmaRepresentante: [''],
      rutaFirma: [''],
      archivoPfx: [''],
      contrasena: [''],
      rutaLogo: ['']
    });
  }

  onLogoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.logoFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result;
        this.form.get('rutaLogo')?.setValue(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      // Opción 1: Enviar como JSON (logo en base64)
      // this.infoEmpresaService.guardarInfoEmpresa(this.form.value).subscribe(resp => {
      //   // manejar respuesta
      // });

      // Opción 2: Enviar como FormData (archivo)
      this.infoEmpresaService.guardarInfoEmpresaFormData(this.form.value, this.logoFile!).subscribe(resp => {
        // manejar respuesta
      });
    }
  }
}
