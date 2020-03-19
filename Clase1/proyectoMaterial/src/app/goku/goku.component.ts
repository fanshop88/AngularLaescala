import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.css']
})
export class GokuComponent implements OnInit {

  @Input() mensaje: string;

  mensajeGohan: string; //guardo el valor para enviarlo a gohan

  constructor() { }

  ngOnInit() {
  }

  recibirEnergia(e : any) {
    this.mensajeGohan = e;
  }

}
