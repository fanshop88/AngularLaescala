import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonHeaderComponent } from '../components/pokemon-header/pokemon-header.component';
import { PokemonHomepageComponent } from '../components/pokemon-homepage/pokemon-homepage.component';
import { MaterialModule } from '../modules/material/material.module';
import { AbilitiesFilterPipe } from '../pipes/abilities-filter.pipe';
import { SearchPipe } from '../pipes/search.pipe';
import { TypeFilterPipe } from '../pipes/type-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PokemonHeaderComponent,
    PokemonHomepageComponent,
    AbilitiesFilterPipe,
    SearchPipe,
    TypeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
