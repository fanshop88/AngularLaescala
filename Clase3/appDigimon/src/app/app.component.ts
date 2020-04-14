import { Component } from '@angular/core';
import { Digimon } from './../interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appDigimon';

  public search: string;
  public levelFilter: string;
  public digimons: Digimon[];

  exportDigimons(digimons: Digimon[]) {
    if (this.digimons !== digimons) {
       this.digimons = digimons;
    }
  }

  newDigimonSearch(search: string): void {
    if (this.search !== search) {
      this.search = search;
    }
  }

  newLevelSelected (level: string): void {
    if (this.levelFilter !== level) {
        this.levelFilter = level;
    }
  }

}
