import { Component, OnInit, Input } from '@angular/core';
import { RAM } from 'src/app/interfaces';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Input() character:RAM;
  dataToggle: string;
  dataTarget: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { size: 'md', scrollable: true, centered: true });
  }

}
