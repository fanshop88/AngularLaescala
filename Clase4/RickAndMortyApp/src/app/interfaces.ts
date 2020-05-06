export interface IResponse {
    info:Info;
    results:any[];
  }

  export class Response implements IResponse {
    info:Info;
    results:any[];
  }

  export interface IInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }

  export class Info implements IInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }

//Personajes
export interface IRAM {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  export class RAM implements IRAM {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

//Episodios
export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    url: string;
  }

  export class Episode implements IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    url: string;
  }

//filtro
export interface IFilter {
    name:string;
    gender:string;
  }

  export class Filter implements IFilter {
    name:string;
    gender:string;
  }