import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './modulos/home/home.component';
import { LayoutComponent } from './layout/layout.component';

// Mantenimientos imports
import { TipoDocumentosComponent } from './modulos/mantenimientos/tipo-documentos/tipo-documentos.component';
import { TipoDocumentoIdentidadComponent } from './modulos/mantenimientos/tipo-documento-identidad/tipo-documento-identidad.component';
import { PaisesComponent } from './modulos/mantenimientos/paises/paises.component';
import { MarcasComponent } from './modulos/mantenimientos/marcas/marcas.component';
import { ClasesComponent } from './modulos/mantenimientos/clases/clases.component';
import { SubClasesComponent } from './modulos/mantenimientos/sub-clases/sub-clases.component';
import { SubSubClasesComponent } from './modulos/mantenimientos/sub-sub-clases/sub-sub-clases.component';
import { TipoOperacionComponent } from './modulos/mantenimientos/tipo-operacion/tipo-operacion.component';
import { TipoExistenciaComponent } from './modulos/mantenimientos/tipo-existencia/tipo-existencia.component';
import { ConceptoCostosComponent } from './modulos/mantenimientos/concepto-costos/concepto-costos.component';
import { EjercicioComponent } from './modulos/mantenimientos/ejercicio/ejercicio.component';
import { EstadosActividadComponent } from './modulos/mantenimientos/estados-actividad/estados-actividad.component';
import { FormasPagoProvisionComponent } from './modulos/mantenimientos/formas-pago-provision/formas-pago-provision.component';
import { FormasPagoCancelacionComponent } from './modulos/mantenimientos/formas-pago-cancelacion/formas-pago-cancelacion.component';
import { MediosPagoComponent } from './modulos/mantenimientos/medios-pago/medios-pago.component';
import { TasaRetencionComponent } from './modulos/mantenimientos/tasa-retencion/tasa-retencion.component';
import { ChoferesComponent } from './modulos/mantenimientos/choferes/choferes.component';
import { TiposDocumentosSunatComponent } from './modulos/mantenimientos/tipos-documentos-sunat/tipos-documentos-sunat.component';

import { CategoriasComponent } from './modulos/mantenimientos/categorias/categorias.component';
import { UnidadMedidaComponent } from './modulos/mantenimientos/unidad-medida/unidad-medida.component';
import { CentroCostosComponent } from './modulos/configuraciones/centro-costos/centro-costos.component';
import { CierreProcesosComponent } from './modulos/configuraciones/cierre-procesos/cierre-procesos.component';
import { ConfiguracionCorreoComponent } from './modulos/configuraciones/configuracion-correo/configuracion-correo.component';
import { MultiEmpresaComponent } from './modulos/configuraciones/multi-empresa/multi-empresa.component';
import { CrudCertificadosComponent } from './modulos/configuraciones/certificados/crud-certificados/crud-certificados.component';
import { TipoCambiosComponent } from './modulos/mantenimientos/tipo-cambios/tipo-cambios.component';
import { GeneralComponent } from './modulos/configuraciones/general/general.component';
import { MovimientosComponent } from './modulos/configuraciones/movimientos/movimientos.component';
import { InfoEmpresaComponent } from './modulos/configuraciones/info-empresa/info-empresa.component';
import { CertificadosComponent } from './modulos/configuraciones/certificados/certificados.component';
import { AreasComponent } from './modulos/mantenimientos/areas/areas.component';
import { CentroCostoComponent } from './modulos/mantenimientos/centro-costo/centro-costo.component';
import { SubCentroCostoComponent } from './modulos/mantenimientos/sub-centro-costo/sub-centro-costo.component';
import { SubSubCentroCostoComponent } from './modulos/mantenimientos/sub-sub-centro-costo/sub-sub-centro-costo.component';
import { PorcentajeImpuestosComponent } from './modulos/mantenimientos/porcentaje-impuestos/porcentaje-impuestos.component';
import { EmpresasComponent } from './modulos/mantenimientos/empresas/empresas.component';
import { PlanCuentasComponent } from './modulos/mantenimientos/plan-cuentas/plan-cuentas.component';
import { SerieDocumentosComponent } from './modulos/mantenimientos/serie-documentos/serie-documentos.component';
import { NumeracionesAutorizadasComponent } from './modulos/mantenimientos/numeraciones-autorizadas/numeraciones-autorizadas.component';
import { MonedasComponent } from './modulos/mantenimientos/monedas/monedas.component';

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
			{ path: 'configuraciones/certificados/nuevo', component: CrudCertificadosComponent },
			{ path: 'configuraciones/multi-empresa', component: MultiEmpresaComponent },
			   { path: 'configuraciones/centro-costos', component: CentroCostosComponent },
			   { path: 'configuraciones/cierre-procesos', component: CierreProcesosComponent },
			{ path: 'configuraciones/configuracion-correo', component: ConfiguracionCorreoComponent },
			// MANTENIMIENTOS rutas
			{ path: 'mantenimientos/areas', component: AreasComponent },
			{ path: 'mantenimientos/centro-costo', component: CentroCostoComponent },
			{ path: 'mantenimientos/sub-centro-costo', component: SubCentroCostoComponent },
			{ path: 'mantenimientos/sub-sub-centro-costo', component: SubSubCentroCostoComponent },
			{ path: 'mantenimientos/porcentaje-impuestos', component: PorcentajeImpuestosComponent },
			{ path: 'mantenimientos/empresas', component: EmpresasComponent },
			{ path: 'mantenimientos/plan-cuentas', component: PlanCuentasComponent },
			{ path: 'mantenimientos/serie-documentos', component: SerieDocumentosComponent },
			{ path: 'mantenimientos/numeraciones-autorizadas', component: NumeracionesAutorizadasComponent },
			{ path: 'mantenimientos/monedas', component: MonedasComponent },
			{ path: 'mantenimientos/tipo-cambios', component: TipoCambiosComponent },
			{ path: 'mantenimientos/tipo-documentos', component: TipoDocumentosComponent },
			{ path: 'mantenimientos/tipo-documento-identidad', component: TipoDocumentoIdentidadComponent },
			{ path: 'mantenimientos/paises', component: PaisesComponent },
			{ path: 'mantenimientos/marcas', component: MarcasComponent },
			{ path: 'mantenimientos/clases', component: ClasesComponent },
			{ path: 'mantenimientos/sub-clases', component: SubClasesComponent },
			{ path: 'mantenimientos/sub-sub-clases', component: SubSubClasesComponent },
			{ path: 'mantenimientos/tipo-operacion', component: TipoOperacionComponent },
			{ path: 'mantenimientos/tipo-existencia', component: TipoExistenciaComponent },
			{ path: 'mantenimientos/concepto-costos', component: ConceptoCostosComponent },
			{ path: 'mantenimientos/ejercicio', component: EjercicioComponent },
			{ path: 'mantenimientos/estados-actividad', component: EstadosActividadComponent },
			{ path: 'mantenimientos/formas-pago-provision', component: FormasPagoProvisionComponent },
			{ path: 'mantenimientos/formas-pago-cancelacion', component: FormasPagoCancelacionComponent },
			{ path: 'mantenimientos/medios-pago', component: MediosPagoComponent },
			{ path: 'mantenimientos/tasa-retencion', component: TasaRetencionComponent },
			{ path: 'mantenimientos/choferes', component: ChoferesComponent },
			{ path: 'mantenimientos/tipos-documentos-sunat', component: TiposDocumentosSunatComponent },
			{ path: 'mantenimientos/categorias', component: CategoriasComponent },
			{ path: 'mantenimientos/unidad-medida', component: UnidadMedidaComponent },
		]
	}
];
