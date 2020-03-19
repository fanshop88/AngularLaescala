import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  total: number = 0;
  @Output() emisor = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  calcular(operacion:string) {
    switch(operacion) {
      case 's':
        this.total = this.num1 + this.num2;
        break;
      case 'r':
        this.total = this.num1 - this.num2;
        break;
      case 'd':
        this.total = this.num1 / this.num2;
        break;
      case 'm':
        this.total = this.num1 * this.num2;
        break;
      default:
        break;
    }
    this.emisor.emit(this.total);
  }

}
