import { Component } from '@angular/core';
import { AuthService, Usuario } from '../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  usuario: Usuario | null = null;

  constructor(private authService: AuthService) {
    this.usuario = this.authService.getUsuario();
  }
}
