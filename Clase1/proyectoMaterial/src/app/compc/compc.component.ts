import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-compc',
  templateUrl: './compc.component.html',
  styleUrls: ['./compc.component.css']
})
export class CompcComponent implements OnInit {

  @Input() guerrero: string;
  @Output() emisor = new EventEmitter();
  muerte: string;

  constructor() { }

  ngOnInit() {
  }

  matar(tipoMuerte:string) {
    switch(tipoMuerte) {
      case 'a':
        this.muerte = 'https://e.rpp-noticias.io/large/2015/02/27/fotos_actualidad_270215krilin_002.jpg';
        break;
      case 'b':
        this.muerte = 'https://e.rpp-noticias.io/large/2015/02/27/fotos_actualidad_270215krilin_001.jpg';
        break;
      case 'c':
        this.muerte = 'https://e.rpp-noticias.io/large/2015/02/27/fotos_actualidad_270215krilin_003.jpg';
        break;
      default:
        break;
    }
    this.emisor.emit(this.muerte);
  }

}
