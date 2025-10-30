    import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CentroCostoService } from './centro-costo.service';

@Component({
  selector: 'app-centro-costo',
  standalone: true,
  templateUrl: './centro-costo.component.html',
  styleUrls: ['./centro-costo.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [CentroCostoService]
})
export class CentroCostoComponent implements OnInit {
  centros: any[] = [];
  loading = false;
  page = 1;
  pageSize = 10;
  total = 0;
  editCentro: any = null;
  editForm: any = {};
  pageNumbers: number[] = [];
  totalPages: number = 1;

  constructor(private centroCostoService: CentroCostoService) {}

  ngOnInit(): void {
    this.getCentros();
    this.actualizarPageNumbers();
    this.updatePageNumbers();
  }

    updatePageNumbers() {
        this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

  getCentros(): void {
    this.loading = true;
    this.centroCostoService.getCentros(this.page, this.pageSize).subscribe({
      next: (res) => {
        this.centros = res.data;
        this.total = res.total;
        this.loading = false;
        this.actualizarPageNumbers();
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  actualizarPageNumbers(): void {
    const totalPages = Math.ceil(this.total / this.pageSize);
    this.pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  public get totalPaginas(): number {
    return Math.ceil(this.total / this.pageSize);
  }

  editar(centro: any) {
    this.editCentro = { ...centro };
    this.editForm = { ...centro };
  }

  guardarEdicion() {
    this.centroCostoService.updateCentro(this.editForm).subscribe({
      next: () => {
        this.getCentros();
        this.editCentro = null;
      }
    });
  }

  cancelarEdicion() {
    this.editCentro = null;
  }

  eliminar(centro: any) {
    if (confirm('¿Está seguro de eliminar el centro de costo ' + centro.descripcion + '?')) {
      this.centroCostoService.deleteCentro(centro.codigo).subscribe({
        next: () => this.getCentros()
      });
    }
  }

  cambiarPagina(nueva: number) {
    if (nueva < 1 || nueva > Math.ceil(this.total / this.pageSize)) {
      return;
    }
    this.page = nueva;
    this.getCentros();
  }

  nuevoCentro() {}
  exportarCentros() {}
  descargarFormato() {}
  imprimirCentros() {}
  cancelar() {}
}