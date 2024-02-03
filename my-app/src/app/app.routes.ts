import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { PrivadaComponent } from './components/privada/privada.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { NoencontradoComponent } from './components/noencontrado/noencontrado.component';


export const routes: Routes = [
    { path: 'inicio', component:InicioComponent},
    { path: 'navegacion', component:NavegacionComponent},
    { path: 'contenido', component:ContenidoComponent},
    { path:'', component:InicioComponent},
    { path: 'iniciosesion', component:IniciosesionComponent},
    { path: 'privada', component:PrivadaComponent},
    { path: '', redirectTo:'navegacion', pathMatch:'full'},
    { path:'**', component:NoencontradoComponent, title:'404'}
];
