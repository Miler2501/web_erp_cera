import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './modulos/home/home.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'home', component: HomeComponent },
			// aquí puedes agregar más rutas hijas
		]
	}
];
