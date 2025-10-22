import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastService } from '../toast.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ CommonModule, FormsModule ]
})
export class LoginComponent {
  usuario = '';
  password = '';
  cargando = false;
  error = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toast: ToastService
  ) {}

  async ingresar() {
    this.cargando = true;
    this.error = '';
    const ok = await this.loginService.login(this.usuario, this.password);
    this.cargando = false;
    if (ok) {
      this.router.navigate(['/home']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
      this.toast.showError('Usuario o contraseña incorrectos');
    }
  }
}
