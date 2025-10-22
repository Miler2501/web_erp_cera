import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleSidebar() {
    // Alternar clase en el body
    const body = document.body;
    if (body.classList.contains('sidebar-toggled')) {
      this.renderer.removeClass(body, 'sidebar-toggled');
    } else {
      this.renderer.addClass(body, 'sidebar-toggled');
    }
    // Alternar clase en el sidebar
    const sidebar = this.el.nativeElement.querySelector('.sidebar');
    if (sidebar) {
      if (sidebar.classList.contains('toggled')) {
        this.renderer.removeClass(sidebar, 'toggled');
      } else {
        this.renderer.addClass(sidebar, 'toggled');
      }
    }
  }
}
