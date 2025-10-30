
import { Component, OnInit } from '@angular/core';
import { AreasService } from './areas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-areas',
  standalone: true,
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [AreasService]
})
export class AreasComponent implements OnInit {
  areas: any[] = [];
  loading = false;

  constructor(private areasService: AreasService) {}

  ngOnInit(): void {
    this.getAreas();
  }

  getAreas(): void {
    this.loading = true;
    this.areasService.getAreas().subscribe({
      next: (data) => {
        this.areas = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  editArea: any = null;
  editForm: any = {};

  editar(area: any) {
    this.editArea = { ...area };
    this.editForm = { ...area };
  }

  guardarEdicion() {
    this.areasService.updateArea(this.editForm).subscribe({
      next: () => {
        this.getAreas();
        this.editArea = null;
      }
    });
  }

  cancelarEdicion() {
    this.editArea = null;
  }

  eliminar(area: any) {
    if (confirm('¿Está seguro de eliminar el área ' + area.descripcion + '?')) {
      this.areasService.deleteArea(area.codigo).subscribe({
        next: () => this.getAreas()
      });
    }
  }

  nuevoArea() {
        // Lógica para crear nuevo registro
    }
    
    exportarAreas() {
        // Lógica para exportar registros
    }
    
    descargarFormato() {
        // Lógica para descargar formato
    }
}