import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CertificadosService } from './certificados.service';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-certificados',
  standalone: true,
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css'],
  imports: [ReactiveFormsModule, CommonModule, DatePipe, RouterModule]
})
export class CertificadosComponent {
  form: FormGroup;
  certificados: any[] = [];

  constructor(private fb: FormBuilder, private certificadosService: CertificadosService) {
    this.form = this.fb.group({
      emisor: ['', Validators.required],
      sujeto: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaCaducidad: ['', Validators.required],
      diasRestantes: [{value: '', disabled: true}],
    });

    this.form.get('fechaCaducidad')?.valueChanges.subscribe(fecha => {
      this.calcularDiasRestantes();
    });
    this.form.get('fechaInicio')?.valueChanges.subscribe(fecha => {
      this.calcularDiasRestantes();
    });

    this.cargarCertificados();
  }

  cargarCertificados() {
    this.certificadosService.obtenerCertificados().subscribe({
      next: (data) => {
        this.certificados = data;
      },
      error: () => {
        this.certificados = [];
      }
    });
  }

  calcularDiasRestantes() {
    const inicio = this.form.get('fechaInicio')?.value;
    const caducidad = this.form.get('fechaCaducidad')?.value;
    if (inicio && caducidad) {
      const fechaHoy = new Date();
      const fechaFin = new Date(caducidad);
      const diff = Math.ceil((fechaFin.getTime() - fechaHoy.getTime()) / (1000 * 60 * 60 * 24));
      this.form.get('diasRestantes')?.setValue(diff >= 0 ? diff : 0);
    } else {
      this.form.get('diasRestantes')?.setValue('');
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.certificadosService.guardarCertificado(this.form.getRawValue()).subscribe({
        next: resp => {
          this.cargarCertificados();
          // Aquí puedes mostrar un mensaje de éxito o limpiar el formulario
        },
        error: err => {
          // Aquí puedes mostrar un mensaje de error
        }
      });
    }
  }
}
