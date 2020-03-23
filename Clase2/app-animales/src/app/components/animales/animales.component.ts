import { Component, OnInit } from '@angular/core';
// aqui importamos el servicio, por lo cual al crear una variable tipo servicio lo podemos utilizar
import {AnimalesService, Animal} from '../../servicios/animales.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html'
})
export class AnimalesComponent implements OnInit {

  animales: Animal[] = [];

  // aqui como ya lo importamos arriba, podemos definir una variable para poder utilizarla dentro de esta clase
  constructor(private _animalesService: AnimalesService,
              private router: Router) { }

  ngOnInit() {
    this.animales = this._animalesService.getAnimales(); // aqui estoy utlizando un metodo prestado de la clase service
    // console.log(this.animales);
  }

  verAnimal(idx:number){
    this.router.navigate(['/animal', idx]);
    // console.log(idx);
  }
}