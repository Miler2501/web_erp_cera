import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movimientos',
  standalone: true,
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class MovimientosComponent {
  formPasoMovimientos: FormGroup;
  formInventario: FormGroup;
  formManifiesto: FormGroup;

  pasoMovimientosIzq = [
    { id: 'ventas', label: 'Movs. en línea de Ventas --> Contabilidad' },
    { id: 'compras', label: 'Movs. en línea de Compras --> Contabilidad' },
    { id: 'inventario', label: 'Movs. en línea de Inventario --> Contabilidad' },
    { id: 'canje', label: 'Movs. en línea de Canje de letras --> Contabilidad' },
    { id: 'panilla', label: 'Movs. en línea de Panilla --> Contabilidad' },
    { id: 'activoFijo', label: 'Movs. en línea de Activo Fijo --> Contabilidad' },
    { id: 'liquidacion', label: 'Movs. en línea de Liquidación --> Contabilidad' },
    { id: 'tesoreria', label: 'Movs. en línea de Tesorería --> Contabilidad' }
  ];
  pasoMovimientosDer = [
    { id: 'elimVentas', label: 'Eliminación en línea de Contabilidad --> Ventas' },
    { id: 'elimCompras', label: 'Eliminación en línea de Contabilidad --> Compras' },
    { id: 'elimInventario', label: 'Eliminación en línea de Contabilidad --> Inventario' }
  ];

  constructor(private fb: FormBuilder) {
    this.formPasoMovimientos = this.fb.group({
      ventas: [true],
      compras: [true],
      inventario: [true],
      canje: [true],
      panilla: [true],
      activoFijo: [true],
      liquidacion: [true],
      tesoreria: [true],
      elimVentas: [false],
      elimCompras: [false],
      elimInventario: [false]
    });
    this.formInventario = this.fb.group({
      tipoInventario: ['peps'],
      kardexAlmacen: [true],
      kardexUnidad: [true],
      moduloInventario: ['inventario1'],
      moduloCompras: ['compras1']
    });
    this.formManifiesto = this.fb.group({
      manifiesto: ['version1']
    });
  }
}
