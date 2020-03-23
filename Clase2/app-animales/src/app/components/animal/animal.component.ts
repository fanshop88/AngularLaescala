import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimalesService} from '../../servicios/animales.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html'
})
export class AnimalComponent {

  animal:any = {};
  //mujer con un hijo, el hijo anda paseando con el papá
  //la mamá espera que llegue el hijo para salir
  //cuando llegue el hijo hago una acción x: por ej: salir al super, quedarse en casa, etc
  constructor(private activatedRoute:ActivatedRoute, private _animalesService:AnimalesService) {
      this.activatedRoute.params.subscribe(params=>{
        this.animal = this._animalesService.getAnimal(params['id']);
        console.log(this.animal);
      })
  }



}
