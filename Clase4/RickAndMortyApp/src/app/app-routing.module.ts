import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent} from './components/shared/layout/layout.component';
import { ComponentModule } from './components/component.module';

const routes: Routes = [
  {path:'', redirectTo:'', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent, //Componente padre
    children:[
      {
        path:'', loadChildren: './components/component.module#ComponentModule' //Modulo hijo con Lazy Loading
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
