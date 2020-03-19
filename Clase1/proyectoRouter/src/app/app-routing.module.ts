import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import { CompcComponent } from './compc/compc.component';
import { CompdComponent } from './compd/compd.component';
import { CompeComponent } from './compe/compe.component';
import { CompfComponent } from './compf/compf.component';
import { SubaComponent } from './suba/suba.component';
import { SubbComponent } from './subb/subb.component';
import { SubcComponent } from './subc/subc.component';
import { SubdComponent } from './compa/subd/subd.component';


const routes: Routes = [
  {
    path: 'compa', component: CompaComponent, children: [
      { path: 'subb', component: SubbComponent },
      { path: 'subc', component: SubcComponent },
      { path: 'subd', component: SubdComponent }
    ]
  },
  { path: 'compb', component: CompbComponent },
  { path: 'compc', component: CompcComponent },
  { path: 'compd', component: CompdComponent },
  { path: 'compe', component: CompeComponent },
  { path: 'compf', component: CompfComponent },
  { path: 'suba', component: SubaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
