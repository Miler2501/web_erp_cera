import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-cierre-proceso',
  standalone: true,
  templateUrl: './modal-cierre-proceso.component.html',
  styleUrls: ['./modal-cierre-proceso.component.css'],
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule]
})
export class ModalCierreProcesoComponent {
  form: FormGroup;
  periodo: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalCierreProcesoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.periodo = data?.periodo || '';
    this.form = this.fb.group({
      fechaInicio: ['', Validators.required],
      horaInicio: ['', Validators.required],
      fechaCierre: ['', Validators.required],
      horaCierre: ['', Validators.required]
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}
