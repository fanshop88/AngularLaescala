import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTES
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [
  {
    path: '',
    data: {title: ''},
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'home/:category', component: HomeComponent},
      {path: 'detail/:movie', component: MoviedetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
