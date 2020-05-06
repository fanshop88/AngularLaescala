import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortalService } from 'src/app/services/portal.service';
import { RAM, IResponse, Filter } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characterLoaded: boolean;
  characters: RAM[];
  filters: Filter = new Filter();
  pageNum: number;
  pageSize: number;
  totalCharacter:number;

  constructor(private portalService: PortalService) { }

  ngOnInit() {
    this.pageNum = 1;
    this.pageSize = 20;
    this.characterLoaded = false;
    this.getCharacters();
  }

  getCharacters(): void {
    this.portalService.getCharacters(this.filters, this.pageNum).subscribe((data: IResponse) => {
      this.characters = data.results;
      this.totalCharacter = data.info.count;
      this.characterLoaded = true;
    });
  }

  getFilters($event:Filter){
    this.filters = $event;
    this.pageNum = 1;
    this.getCharacters();
  }

  pageChange($event){
    this.pageNum = $event;
    this.getCharacters();
  }

}
