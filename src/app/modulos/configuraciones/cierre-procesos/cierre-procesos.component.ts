import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ModalCierreProcesoComponent } from './modal-cierre-proceso.component';
import { CierreProcesosService } from './cierre-procesos.service';

@Component({
  selector: 'app-cierre-procesos',
  standalone: true,
  templateUrl: './cierre-procesos.component.html',
  styleUrls: ['./cierre-procesos.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class CierreProcesosComponent {
  // ...existing code...
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private cierreProcesosService: CierreProcesosService
  ) {
    this.form = this.fb.group({
      area: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaCierre: ['', Validators.required],
      procesos: this.fb.array(this.procesos.map(() =>
        this.fb.group({
          meses: this.fb.array(this.meses.map(() => this.fb.control(false)))
        })
      ))
    });
  }

  ngAfterViewInit() {
    this.procesosFormArray.controls.forEach((procesoGroup, i) => {
      const mesesArray = procesoGroup.get('meses') as FormArray;
      mesesArray.controls.forEach((control, j) => {
        control.valueChanges.subscribe((checked) => {
          if (checked) {
            Swal.fire({
              title: '¿Desea cerrar el periodo?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Sí',
              cancelButtonText: 'No'
            }).then(result => {
              if (result.isConfirmed) {
                // Abrir modal y pasar el periodo (mes)
                const periodo = this.meses[j];
                this.dialog.open(ModalCierreProcesoComponent, {
                  width: '400px',
                  data: { periodo }
                }).afterClosed().subscribe(res => {
                  if (!res) {
                    control.setValue(false, { emitEvent: false });
                  } else {
                    // Consumir API para guardar el cierre de periodo
                    const payload = {
                      proceso: this.procesos[i].codigo,
                      periodo,
                      ...res // fechas y horas del modal
                    };
                    this.cierreProcesosService.guardarCierrePeriodo(payload).subscribe({
                      next: () => {
                        Swal.fire('Guardado', 'El cierre de periodo se guardó correctamente.', 'success');
                      },
                      error: () => {
                        Swal.fire('Error', 'No se pudo guardar el cierre de periodo.', 'error');
                        control.setValue(false, { emitEvent: false });
                      }
                    });
                  }
                });
              } else {
                control.setValue(false, { emitEvent: false });
              }
            });
          }
        });
      });
    });
  }
  ngOnInit() {
    // Simulación de inicialización de valores desde backend
    const valoresBackend = [
      // Cada proceso tiene un array de 12 valores booleanos (uno por mes)
      [true, false, false, false, false, false, false, false, false, false, false, false],
      [false, true, false, false, false, false, false, false, false, false, false, false],
      [false, false, true, false, false, false, false, false, false, false, false, false],
      [false, false, false, true, false, false, false, false, false, false, false, false],
      [false, false, false, false, true, false, false, false, false, false, false, false]
    ];
    valoresBackend.forEach((meses, i) => {
      const mesesArray = this.procesosFormArray.at(i).get('meses') as FormArray;
      meses.forEach((valor, j) => {
        mesesArray.at(j).setValue(valor);
      });
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Recopilar los valores de los checkboxes
      const resultado = this.procesosFormArray.controls.map((procesoGroup, i) => {
        const mesesArray = procesoGroup.get('meses') as FormArray;
        return {
          proceso: this.procesos[i].codigo,
          meses: mesesArray.value // array de booleanos
        };
      });
      // Aquí puedes enviar 'resultado' al backend
      console.log('Valores guardados:', resultado);
      // Mostrar mensaje de éxito, resetear, etc.
    }
  }
  meses = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
  ];

  procesos = [
    { codigo: 'MOD01', nombre: 'MÓDULO ACTIVOS FIJOS' },
    { codigo: 'MOD02', nombre: 'MÓDULO ALMACÉN' },
    { codigo: 'MOD03', nombre: 'MÓDULO COMPRAS' },
    { codigo: 'MOD04', nombre: 'MÓDULO CONTABILIDAD' },
    { codigo: 'MOD05', nombre: 'MÓDULO TESORERÍA' }
    // ...agrega más procesos según sea necesario
  ];
  form: FormGroup;

  get procesosFormArray(): FormArray {
    return this.form.get('procesos') as FormArray;
  }

  getMesControl(procesoIndex: number, mesIndex: number): FormControl {
    return (this.procesosFormArray.at(procesoIndex).get('meses') as FormArray).at(mesIndex) as FormControl;
  }
}
