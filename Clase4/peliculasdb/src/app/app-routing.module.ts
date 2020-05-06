import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAppComponent } from './components/shared/layout-app/layout-app.component';

const routes: Routes = [
  {path:'', redirectTo:'', pathMatch: 'full'},
  {
    path: '',
    component: LayoutAppComponent, //Componente padre
    children:[
      {
        path:'', loadChildren: './components/components.module#ComponentsModule' //Modulo hijo con Lazy Loading
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
