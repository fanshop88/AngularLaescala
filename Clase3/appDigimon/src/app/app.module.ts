import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from 'src/components/header/header.component';
import { BodyComponent } from 'src/components/body/body.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { SearchFilterPipe } from 'src/pipes/search-filter.pipe';
import { LevelFilterPipe } from 'src/pipes/level-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SearchFilterPipe,
    LevelFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
