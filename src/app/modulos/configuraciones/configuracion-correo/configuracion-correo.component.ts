import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfiguracionCorreoService } from './configuracion-correo.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfiguracionCorreoComponent } from './modal-configuracion-correo.component';
import { EstructuraMensajeComponent } from './estructura-mensaje.component';

@Component({
  selector: 'app-configuracion-correo',
  standalone: true,
  templateUrl: './configuracion-correo.component.html',
  styleUrls: ['./configuracion-correo.component.css'],
  imports: [ReactiveFormsModule, CommonModule, EstructuraMensajeComponent]
})
export class ConfiguracionCorreoComponent {
  abrirModalEditar(index: number) {
    const grupo = this.correosFormArray.at(index);
    const dialogRef = this.dialog.open(ModalConfiguracionCorreoComponent, {
      width: '500px',
      data: grupo.value
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const id = grupo.get('id')?.value;
        if (!id) return;
        this.correoService.modificarCorreo(id, result).subscribe({
          next: () => {
            Swal.fire('Modificado', 'Correo modificado correctamente', 'success');
            this.cargarCorreos();
          },
          error: () => Swal.fire('Error', 'No se pudo modificar el correo', 'error')
        });
      }
    });
  }
  // Paginación
  paginaActual = 1;
  registrosPorPagina = 10;

  get correosPaginados(): FormGroup[] {
    const inicio = (this.paginaActual - 1) * this.registrosPorPagina;
    return this.correosFormArray.controls.slice(inicio, inicio + this.registrosPorPagina) as FormGroup[];
  }

  get totalPaginas() {
    return Math.ceil(this.correosFormArray.length / this.registrosPorPagina);
  }

  cambiarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      this.correoSeleccionado = null;
    }
  }
  form: FormGroup;
  estructuraMensajeForm: FormGroup;
  correoSeleccionado: number | null = null;

  constructor(private fb: FormBuilder, private correoService: ConfiguracionCorreoService, private dialog: MatDialog) {
    this.form = this.fb.group({
      correos: this.fb.array([])
    });
    this.estructuraMensajeForm = this.fb.group({
      proceso: ['', Validators.required],
      asunto: ['', Validators.required],
      saludo: ['', Validators.required],
      mensaje: ['', Validators.required],
      despedida: ['', Validators.required],
      principal: [false]
    });
    this.cargarCorreos();
  }

  cargarCorreos() {
    this.correoService.obtenerCorreos().subscribe(data => {
      this.correosFormArray.clear();
      data.forEach(correo => {
        this.correosFormArray.push(this.fb.group({
          id: [correo.id],
          puerto: [correo.puerto, Validators.required],
          host: [correo.host, Validators.required],
          correo: [correo.correo, Validators.required],
          nombreEnvio: [correo.nombreEnvio, Validators.required]
        }));
      });
    });
  }

  get correosFormArray(): FormArray {
    return this.form.get('correos') as FormArray;
  }

  agregarCorreo() {
    const dialogRef = this.dialog.open(ModalConfiguracionCorreoComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.correoService.guardarCorreo(result).subscribe({
          next: () => {
            Swal.fire('Guardado', 'Correo insertado correctamente', 'success');
            this.cargarCorreos();
          },
          error: () => Swal.fire('Error', 'No se pudo insertar el correo', 'error')
        });
      }
    });
  }

  eliminarCorreo(index: number) {
    const id = this.correosFormArray.at(index).get('id')?.value;
    if (!id) return;
    this.correoService.eliminarCorreo(id).subscribe({
      next: () => {
        Swal.fire('Eliminado', 'Correo eliminado correctamente', 'success');
        this.cargarCorreos();
      },
      error: () => Swal.fire('Error', 'No se pudo eliminar el correo', 'error')
    });
  }

  modificarCorreo(index: number) {
    const grupo = this.correosFormArray.at(index);
    const id = grupo.get('id')?.value;
    if (!id) return;
    this.correoService.modificarCorreo(id, grupo.value).subscribe({
      next: () => {
        Swal.fire('Modificado', 'Correo modificado correctamente', 'success');
        this.cargarCorreos();
      },
      error: () => Swal.fire('Error', 'No se pudo modificar el correo', 'error')
    });
  }
  guardarEstructuraMensaje(data: any) {
    this.correoService.guardarEstructuraMensaje(data).subscribe({
      next: () => {
        Swal.fire('Guardado', 'Estructura de mensaje guardada correctamente', 'success');
      },
      error: () => {
        Swal.fire('Error', 'No se pudo guardar la estructura de mensaje', 'error');
      }
    });
  }
}
