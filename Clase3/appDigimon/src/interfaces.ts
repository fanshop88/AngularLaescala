export enum TYPE_COLOURS {
    "In Training" = 'training',
    Rookie = 'rookie',
    Mega = 'mega',
    Champion = 'champion',
    Ultimate = 'ultimate',
    Fresh = 'fresh'
  }
  
  export interface Digimon {
    id: number;
    name: string;
    img: string;
    level: string;
  }
