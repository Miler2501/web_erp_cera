import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  showError(message: string) {
    const el = document.createElement('div');
    el.innerHTML = `❌ ${message}`;
    Object.assign(el.style, {
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      zIndex: '9999',
      background: '#dc3545',
      color: '#fff',
      padding: '1rem 2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      pointerEvents: 'none',
      maxWidth: '90vw',
    });
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }

  showSuccess(message: string) {
    const el = document.createElement('div');
    el.innerHTML = `✅ ${message}`;
    Object.assign(el.style, {
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      zIndex: '9999',
      background: '#198754',
      color: '#fff',
      padding: '1rem 2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      pointerEvents: 'none',
      maxWidth: '90vw',
    });
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}
