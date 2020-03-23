import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AnimalesComponent} from './components/animales/animales.component';
import {AnimalComponent} from './components/animal/animal.component';
import { BuscadorComponent } from './components/buscador/buscador.component'
// en este archivo se manejan todas las rutas de los Componentes de mi aplicación

const APP_ROUTES: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'animales', component:  AnimalesComponent},
  { path: 'animal/:id', component:  AnimalComponent},
  { path: 'buscar/:termino', component: BuscadorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' } 
  // esta linea revisa todas las rutas y trata de hacer match sino pilla ninguna se va por defecto al path del home
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

// como esta constante APP_ROUTING es exportable y contiene mi arreglo de rutas la tenemos que importar y registrar en app.module.ts