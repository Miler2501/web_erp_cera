import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-configuracion-correo',
  standalone: true,
  templateUrl: './modal-configuracion-correo.component.html',
  styleUrls: ['./modal-configuracion-correo.component.css'],
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule]
})
export class ModalConfiguracionCorreoComponent {
  form: FormGroup;
  tiposConexion = [
    'Connectar SSL Auto',
    'Connectar TLS',
    'Sin conexión segura'
  ];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ModalConfiguracionCorreoComponent>) {
    this.form = this.fb.group({
      proceso: ['', Validators.required],
      nombreEnvio: ['', Validators.required],
      tipoConexion: [this.tiposConexion[0], Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      servidor: ['', Validators.required],
      puerto: ['', Validators.required]
    });
  }

  guardar() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}
