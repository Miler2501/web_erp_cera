import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubCentroCostoService } from './sub-centro-costo.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-sub-centro-costo',
  standalone: true,
  templateUrl: './sub-centro-costo.component.html',
  styleUrls: ['./sub-centro-costo.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [SubCentroCostoService]
})
export class SubCentroCostoComponent implements OnInit {
  subCentros: any[] = [];
  loading = false;
  page = 1;
  pageSize = 10;
  total = 0;
  totalPages = 1;
  pageNumbers: number[] = [];
  editSubCentro: any = null;
  editForm: any = {};
  constructor(@Inject(SubCentroCostoService) private subCentroCostoService: SubCentroCostoService) {}

  ngOnInit(): void {
    this.getSubCentros();
    this.actualizarPageNumbers();
  }

  getSubCentros(): void {
    this.loading = true;
    this.subCentroCostoService.getSubCentros(this.page, this.pageSize).subscribe({
      next: (res) => {
        this.subCentros = res.data;
        this.total = res.total;
        this.totalPages = Math.max(1, Math.ceil(this.total / this.pageSize));
        this.loading = false;
        this.actualizarPageNumbers();
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  actualizarPageNumbers(): void {
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  editar(subCentro: any) {
    this.editSubCentro = { ...subCentro };
    this.editForm = { ...subCentro };
  }

  guardarEdicion() {
    this.subCentroCostoService.updateSubCentro(this.editForm).subscribe({
      next: () => {
        this.getSubCentros();
        this.editSubCentro = null;
      }
    });
  }

  cancelarEdicion() {
    this.editSubCentro = null;
  }

  eliminar(subCentro: any) {
    if (confirm('¿Está seguro de eliminar el sub centro de costo ' + subCentro.descripcion + '?')) {
      this.subCentroCostoService.deleteSubCentro(subCentro.codigo).subscribe({
        next: () => this.getSubCentros()
      });
    }
  }

  cambiarPagina(nueva: number) {
    if (nueva < 1 || nueva > this.totalPages) {
      return;
    }
    this.page = nueva;
    this.getSubCentros();
  }

  nuevoSubCentro() {}
  exportarSubCentros() {}
  descargarFormato() {}
  importarSubCentros() {}
  cancelar() {}
}