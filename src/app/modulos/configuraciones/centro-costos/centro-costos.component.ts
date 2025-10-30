// ...existing code...
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CentroCostosService } from './centro-costos.service';

@Component({
  selector: 'app-centro-costos',
  standalone: true,
  templateUrl: './centro-costos.component.html',
  styleUrls: ['./centro-costos.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class CentroCostosComponent {
  form: FormGroup;
  usuarios = [
    { usuario: 'ADM', nombre: 'ADM' },
    { usuario: 'ADMIN', nombre: 'ADMINISTRADOR' },
    { usuario: 'AVELASQUEZ', nombre: 'ANA LICIA VELASQUEZ LOPEZ' },
    { usuario: 'AVILLEGAS', nombre: 'ALEJANDRO TOMAS VILLEGAS CASTAÑEDA' },
    { usuario: 'CESPINOZA', nombre: 'CLENNEN ESPINOZA LEON' },
    { usuario: 'CQUIROZ', nombre: 'CESAR ARMANDO QUIROZ LUNA' }
    // ... puedes agregar más usuarios
  ];

  constructor(private fb: FormBuilder, private centroCostosService: CentroCostosService) {
    this.form = this.fb.group({
      usuariosAsignados: this.fb.array(this.usuarios.map(() => false))
    });
  }

  get usuariosAsignados() {
    return this.form.get('usuariosAsignados') as FormArray;
  }

  onSubmit() {
    if (this.form.valid) {
      const asignados = this.usuarios
        .map((u, i) => this.usuariosAsignados.at(i).value ? u.usuario : null)
        .filter(u => u !== null);
      this.centroCostosService.asignarCentroCostos({ usuarios: asignados }).subscribe({
        next: () => {
          // Aquí puedes mostrar un mensaje de éxito
        },
        error: () => {
          // Aquí puedes mostrar un mensaje de error
        }
      });
    }
  }

  getUsuarioControl(i: number): import('@angular/forms').FormControl {
    return (this.form.get('usuariosAsignados') as FormArray).at(i) as import('@angular/forms').FormControl;
  }
}
