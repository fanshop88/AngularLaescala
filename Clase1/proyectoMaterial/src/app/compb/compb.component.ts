import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.css']
})
export class CompbComponent implements OnInit {

  @Input() villano : string;
  mensajeGuerrero: string;
  nombre: string;

  constructor0() { }

  ngOnInit() {
  }

  recibirAccion(e:any){
    this.mensajeGuerrero = e;
  }

  nombreVillano (e : any) {
    this.nombre = e.target.value;
  }

}
