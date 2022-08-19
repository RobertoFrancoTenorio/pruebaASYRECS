import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios/servicios.component';
import { ACERCADEComponent } from './components/acerca-de/acerca-de.component';
import { AvisoDePrivacidadComponent } from './components/aviso-de-privacidad/aviso-de-privacidad.component';
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'acerca_de', component: ACERCADEComponent },
  { path: 'aviso_de_privacidad', component: AvisoDePrivacidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
