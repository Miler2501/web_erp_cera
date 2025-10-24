import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { SidebarComponent } from './sidebar.component';
import { TopbarComponent } from './topbar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [RouterOutlet, SidebarComponent, TopbarComponent, BreadcrumbsComponent, HttpClientModule]
})
export class LayoutComponent {}
