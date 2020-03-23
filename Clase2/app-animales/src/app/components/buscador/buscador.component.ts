import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalesService } from '../../servicios/animales.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  animales: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private _animalesService: AnimalesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.animales = this._animalesService.buscarAnimales(params['termino']);
      console.log(this.animales);
    });
  }
}