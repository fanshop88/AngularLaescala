import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';


const routes: Routes = [
  {
    path:'',
    data: {title:''},
    children: [
      {
        path:'', redirectTo:'home', pathMatch:'full'
      },
      {
        path:'home', component:HomeComponent
      },
      {
        path:'home/:character', component: CharactersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
