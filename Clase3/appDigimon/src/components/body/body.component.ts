import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DigimonService } from 'src/services/digimon.service';
import { Digimon, TYPE_COLOURS } from 'src/interfaces';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Output() exportDigimons = new EventEmitter();
  digimonLoaded: boolean;
  digimons: Digimon[];
  query: string;
  levelsFilter: string;
  levels: string[];

  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }

  @Input() set levelFilter(levelFilter: string) {
    if (levelFilter !== this.levelsFilter) {
        this.levelsFilter = levelFilter;
    }
  }

  constructor(private digimonService: DigimonService) { 

  }

  ngOnInit() {
    this.digimonLoaded = false;
    this.getDigimons();
    this.levels = [];
    
  }

  getDigimons(): void {
    this.digimonService.getDigimons().subscribe((data: Digimon[]) => {
      this.digimons = data;
      this.digimonLoaded = true;
      this.exportDigimons.emit(this.digimons);
    });
  }

  /** Listado de niveles */
  private loadLevels(digimons: Digimon[]): void {
    if(digimons && digimons.length > 0) {
      digimons.forEach(digimon => {
        const level = digimon.level;
        if(!this.levels.includes(level)){
          this.levels.push(level);
          this.levels.sort();
        }
      });
    }
  }

  _getTypeColour(type: string): string {
    if (type) {
      return TYPE_COLOURS[type];
    }
  }

}
