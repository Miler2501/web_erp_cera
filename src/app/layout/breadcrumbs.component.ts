import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  imports: [CommonModule, RouterModule]
})
export class BreadcrumbsComponent {
  breadcrumbs: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.route.root);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, path: string[] = []): string[] {
    if (route.routeConfig && route.routeConfig.path) {
      path.push(route.routeConfig.path);
    }
    if (route.firstChild) {
      return this.createBreadcrumbs(route.firstChild, path);
    }
    return path;
  }
}
