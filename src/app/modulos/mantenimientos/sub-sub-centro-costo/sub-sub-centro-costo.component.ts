import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubSubCentroCostoService } from './sub-sub-centro-costo.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-sub-sub-centro-costo',
  standalone: true,
  templateUrl: './sub-sub-centro-costo.component.html',
  styleUrls: ['./sub-sub-centro-costo.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [SubSubCentroCostoService]
})
export class SubSubCentroCostoComponent implements OnInit {
  subSubCentros: any[] = [];
  loading = false;
  page = 1;
  pageSize = 10;
  total = 0;
  totalPages = 1;
  pageNumbers: number[] = [];
  editSubSubCentro: any = null;
  editForm: any = {};
  constructor(@Inject(SubSubCentroCostoService) private subSubCentroCostoService: SubSubCentroCostoService) {}

  ngOnInit(): void {
    this.getSubSubCentros();
    this.actualizarPageNumbers();
  }

  getSubSubCentros(): void {
    this.loading = true;
    this.subSubCentroCostoService.getSubSubCentros(this.page, this.pageSize).subscribe({
      next: (res) => {
        this.subSubCentros = res.data;
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

  editar(subSubCentro: any) {
    this.editSubSubCentro = { ...subSubCentro };
    this.editForm = { ...subSubCentro };
  }

  guardarEdicion() {
    this.subSubCentroCostoService.updateSubSubCentro(this.editForm).subscribe({
      next: () => {
        this.getSubSubCentros();
        this.editSubSubCentro = null;
      }
    });
  }

  cancelarEdicion() {
    this.editSubSubCentro = null;
  }

  eliminar(subSubCentro: any) {
    if (confirm('¿Está seguro de eliminar el sub sub centro de costo ' + subSubCentro.descripcion + '?')) {
      this.subSubCentroCostoService.deleteSubSubCentro(subSubCentro.codigoSS).subscribe({
        next: () => this.getSubSubCentros()
      });
    }
  }

  cambiarPagina(nueva: number) {
    if (nueva < 1 || nueva > this.totalPages) {
      return;
    }
    this.page = nueva;
    this.getSubSubCentros();
  }

  nuevoSubSubCentro() {}
  exportarSubSubCentros() {}
  descargarFormato() {}
  importarSubSubCentros() {}
  cancelar() {}
}