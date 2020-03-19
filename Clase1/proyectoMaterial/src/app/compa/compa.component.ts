import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.css']
})
export class CompaComponent implements OnInit {

  nombre: string;
  apellido: string;

  recibirEvento (e : any) {
    this.nombre = e.target.value;
  }

  constructor0() { }

  ngOnInit() {
  }

}
