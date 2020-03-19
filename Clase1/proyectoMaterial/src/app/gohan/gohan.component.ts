import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gohan',
  templateUrl: './gohan.component.html',
  styleUrls: ['./gohan.component.css']
})
export class GohanComponent implements OnInit {

  @Output() emisor = new EventEmitter();
  @Input() ki : string;

  constructor() { }

  ngOnInit() {
  }

  darEnergia(){
    this.emisor.emit('Toma mi energia!!!!!');
  }

}
