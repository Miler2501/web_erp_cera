import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfiguracionCorreoService } from './configuracion-correo.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEstructuraMensajeComponent } from './modal-estructura-mensaje/modal-estructura-mensaje.component';

@Component({
  selector: 'app-estructura-mensaje',
  standalone: true,
  templateUrl: './estructura-mensaje.component.html',
   imports: [ CommonModule, ReactiveFormsModule ]
})
export class EstructuraMensajeComponent implements OnInit {
  @Input() form!: FormGroup;
  @Output() guardarEstructura = new EventEmitter<any>();

  estructuras: any[] = [];

  constructor(
    private correoService: ConfiguracionCorreoService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.correoService.obtenerEstructuraMensaje().subscribe({
      next: (data) => {
        this.estructuras = Array.isArray(data) ? data : [];
      },
      error: () => {
        this.estructuras = [];
      }
    });
  }

  editarEstructura(index: number) {
    const dialogRef = this.dialog.open(ModalEstructuraMensajeComponent, {
      width: '600px',
      data: this.estructuras[index]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const id = this.estructuras[index].id;
        if (id) {
          this.correoService.guardarEstructuraMensaje({ ...result, id }).subscribe({
            next: () => {
              this.estructuras[index] = { ...result, id };
            }
          });
        }
      }
    });
  }

  eliminarEstructura(index: number) {
    // Aquí puedes llamar al servicio para eliminar
    const id = this.estructuras[index].id;
    if (!id) return;
    this.correoService.eliminarCorreo(id).subscribe({
      next: () => {
        this.estructuras.splice(index, 1);
      }
    });
  }

  abrirModalInsertar() {
    const dialogRef = this.dialog.open(ModalEstructuraMensajeComponent, {
      width: '600px',
      data: null
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.correoService.guardarEstructuraMensaje(result).subscribe({
          next: (res) => {
            this.estructuras.push(res);
          }
        });
      }
    });
  }
}
