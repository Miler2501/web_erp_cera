import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './modulos/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { GeneralComponent } from './modulos/configuraciones/general/general.component';
import { MovimientosComponent } from './modulos/configuraciones/movimientos/movimientos.component';
import { InfoEmpresaComponent } from './modulos/configuraciones/info-empresa/info-empresa.component';
import { CertificadosComponent } from './modulos/configuraciones/certificados/certificados.component';

export const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'home', component: HomeComponent },
            { path: 'configuraciones/general', component: GeneralComponent },
            { path: 'configuraciones/movimientos', component: MovimientosComponent },
            { path: 'configuraciones/empresa', component: InfoEmpresaComponent },
			{ path: 'configuraciones/certificados', component: CertificadosComponent },
            // aquí puedes agregar más rutas hijas
		]
	}
];
