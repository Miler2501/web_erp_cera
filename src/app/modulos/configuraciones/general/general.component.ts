import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-general',
  standalone: true,
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  imports: [ReactiveFormsModule]
})
export class GeneralComponent {
  formDocumentos: FormGroup;
  formRetencion: FormGroup;
  formOtras: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formDocumentos = this.fb.group({
      docCliente: ['ruc'],
      docProveedor: ['ruc'],
      docVendedor: ['ruc'],
      docTransportista: ['ruc']
    });
    this.formRetencion = this.fb.group({
      importeMax: [700],
      porcentajeRet: [3.000]
    });
    this.formOtras = this.fb.group({
      modificarVoucher: [true],
      visualizarEjercicio: [true],
      habilitarMedioPago: [false],
      modificarCheque: [true],
      aplicarISC: [false],
      calcularDetraccion: [false],
      deshabilitarCarga: [false],
      decimalesDetalles: [9],
      inactividad: [30],
      registrarSeguimiento: [false],
      deshabilitarAlertas: [true],
      habilitarNombresRepetidos: [false],
      comunicacionEmpresas: [''],
      activarTraslado: [false],
      empresasTraslado: [''],
      trasladarArbitrarios: [false]
    });
  }
}
