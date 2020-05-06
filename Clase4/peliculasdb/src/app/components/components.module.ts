import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './movie-detail/movie-detail.component';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    MoviedetailComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class ComponentsModule { }
