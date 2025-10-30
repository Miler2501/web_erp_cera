import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MultiEmpresaService } from './multi-empresa.service';

@Component({
  selector: 'app-multi-empresa',
  standalone: true,
  templateUrl: './multi-empresa.component.html',
  styleUrls: ['./multi-empresa.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class MultiEmpresaComponent {
  form: FormGroup;
  grupos: any[] = [];
  totalGrupos = 0;
  page = 1;
  pageSize = 10;
  editando = false;
  grupoEdit: any = null;

  constructor(private fb: FormBuilder, private multiEmpresaService: MultiEmpresaService) {
    this.form = this.fb.group({
      codigoGrupo: ['', Validators.required],
      nombreGrupo: ['', Validators.required],
      indicadorActivo: [false]
    });
    this.cargarGrupos();
  }

  cargarGrupos() {
    this.multiEmpresaService.obtenerGrupos(this.page, this.pageSize).subscribe({
      next: (data) => {
        this.grupos = data.items || data;
        this.totalGrupos = data.total || this.grupos.length;
      },
      error: () => {
        this.grupos = [];
        this.totalGrupos = 0;
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.editando && this.grupoEdit) {
        this.multiEmpresaService.actualizarGrupo(this.grupoEdit.id, this.form.value).subscribe({
          next: () => {
            this.cancelarEdicion();
            this.cargarGrupos();
          }
        });
      } else {
        this.multiEmpresaService.guardarGrupo(this.form.value).subscribe({
          next: () => {
            this.cargarGrupos();
            this.form.reset({ indicadorActivo: false });
          }
        });
      }
    }
  }

  editarGrupo(grupo: any) {
    this.editando = true;
    this.grupoEdit = grupo;
    this.form.patchValue({
      codigoGrupo: grupo.codigoGrupo,
      nombreGrupo: grupo.nombreGrupo,
      indicadorActivo: grupo.indicadorActivo
    });
  }

  cancelarEdicion() {
    this.editando = false;
    this.grupoEdit = null;
    this.form.reset({ indicadorActivo: false });
  }

  eliminarGrupo(grupo: any) {
    if (confirm('¿Está seguro de eliminar este grupo?')) {
      this.multiEmpresaService.eliminarGrupo(grupo.id).subscribe({
        next: () => {
          this.cargarGrupos();
          if (this.editando && this.grupoEdit?.id === grupo.id) {
            this.cancelarEdicion();
          }
        }
      });
    }
  }

  paginaAnterior() {
    if (this.page > 1) {
      this.page--;
      this.cargarGrupos();
    }
  }

  paginaSiguiente() {
    if (this.page * this.pageSize < this.totalGrupos) {
      this.page++;
      this.cargarGrupos();
    }
  }
}
