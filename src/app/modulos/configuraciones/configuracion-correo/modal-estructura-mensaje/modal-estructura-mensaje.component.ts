import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-estructura-mensaje',
  standalone: true,
  templateUrl: './modal-estructura-mensaje.component.html',
  imports: [ReactiveFormsModule, CommonModule]
})
export class ModalEstructuraMensajeComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalEstructuraMensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      proceso: [data?.proceso || '', Validators.required],
      asunto: [data?.asunto || '', Validators.required],
      saludo: [data?.saludo || '', Validators.required],
      mensaje: [data?.mensaje || '', Validators.required],
      despedida: [data?.despedida || '', Validators.required],
      principal: [data?.principal || false]
    });
  }

  guardar() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
