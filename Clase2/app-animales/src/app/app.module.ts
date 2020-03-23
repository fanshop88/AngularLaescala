import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//aquí se divieron las importanciones y registros segementados para rutas, servicios y componentes

//Rutas, se registran debajo en imports
import {APP_ROUTING} from './app-routing.module';

//Servicios: clases que nos permiten prestar funcionalidades a otras clases
//se registran abajo en providers
import {AnimalesService} from './servicios/animales.service';


//Componentes, se registran debajo en declarations
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { AnimalComponent } from './components/animal/animal.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AnimalTarjetaComponent } from './components/animal-tarjeta/animal-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AnimalesComponent,
    AnimalComponent,
    BuscadorComponent,
    AnimalTarjetaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AnimalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
