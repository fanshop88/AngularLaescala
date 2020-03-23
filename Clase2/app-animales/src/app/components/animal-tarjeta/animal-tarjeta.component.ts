import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-tarjeta',
  templateUrl: './animal-tarjeta.component.html',
  styleUrls: ['./animal-tarjeta.component.css']
})
export class AnimalTarjetaComponent implements OnInit {
  //app animal -> html <app-animal-tarjeta [animal]=animal></app-animal-tarjeta>
  @Input() animal: any = {};
  @Input() index: number;
  //@Output() animalSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    //this.animalSeleccionado = new EventEmitter();
  }
  ngOnInit() {
  }
  //navigateByUrl = para rutas estáticas
  //navigate = para rutas dinámicas, que reciban parámetros
  verAnimal(){
    this.router.navigate(['/animal', this.index]);
  }

}
