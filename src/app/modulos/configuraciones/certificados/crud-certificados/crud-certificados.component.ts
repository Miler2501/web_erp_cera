import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-certificados',
  standalone: true,
  templateUrl: './crud-certificados.component.html',
  styleUrls: ['./crud-certificados.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class CrudCertificadosComponent {
  form: FormGroup;
  usuarios = [
    { usuario: 'ADM', nombre: 'ADM' },
    { usuario: 'admin', nombre: 'Administrador' },
    { usuario: 'AMURGA', nombre: 'ANDRES MARCOS MURGA' },
    { usuario: 'ASISTENTE', nombre: 'ASISTENTE' },
    { usuario: 'AVELASQUEZ', nombre: 'ANA LICIA VELASQUEZ LOPEZ' },
    { usuario: 'AVILLEGAS', nombre: 'ALEJANDRO TOMAS VILLEGAS' },
    { usuario: 'BVALDIVIA', nombre: 'BARBARA PIERINA VALDIVIA' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      archivo: [''],
      archivoPfx: [''],
      contrasena: ['', Validators.required],
      usuariosAsignados: this.fb.array(this.usuarios.map(() => false))
    });
  }

  get usuariosAsignados() {
    return this.form.get('usuariosAsignados') as FormArray;
  }
  getUsuarioControl(i: number) {
    return this.usuariosAsignados.controls[i] as import('@angular/forms').FormControl;
  }
}
