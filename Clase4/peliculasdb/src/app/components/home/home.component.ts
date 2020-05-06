import { Component, OnInit, OnDestroy } from '@angular/core';
//Animaciones y transiciones
import {trigger, transition, query, stagger, animate, style} from '@angular/animations';
import {take} from 'rxjs/operators';
import {ActivatedRoute, Params, Router} from '@angular/router';

//Servicios
import {MovieService} from 'src/app/services/movie.service';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})

export class HomeComponent implements OnInit, OnDestroy {

  //Declaraciones de variables
  public viewCount = 9; //Visualizar 9 peliculas
  public page = 0;
  public pageSize = 9; //Tamaño de la pagina
  public previusPage = 0;
  public movies = [];
  public movieStorage = [];
  public objectMovie: any;
  public subscripcionSearchData: Subscription;
  private componentDestroyed: Subject<boolean> = new Subject();
  public message = null;

  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute
  ) { 
    this.subscripcionSearchData = this.movieService.observableSearchData$
    .subscribe(
      dataSearch => {
        if(dataSearch) {
          this.getDataSearch(dataSearch);
        }
      }
    )
  }

  ngOnInit() { //Al iniciar la aplicacion suscribo un parametro de categoria
    this.router.params.subscribe(routeParams => {
      this.getPopular(routeParams.category)
    });
  }

  ngOnDestroy():void{ //Limpiamos la data
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
    this.subscripcionSearchData.unsubscribe();
  }

  public changeViewMovie(){
    this.movies = [];
    this.movies = this.movieStorage.slice(0, this.viewCount);
  }

  public getPopular(category: string){
    this.movies = [];
    this.movieService.getPopular(category)
    .pipe(
      // take(1)  //especifica la cantidad de veces que utilizo para traer las pelculas
    )
    .subscribe(
      res =>  {
        this.movieStorage = res.results; //Estructura de la respuesta
        this.movies = res.results.slice(0, this.viewCount);
        console.log(this.movies);
      },
      err => {
        console.log(err);
      },
      () => {
        //Peticion finalizada
      }
    );
  }

  public getDataSearch(search: string) {
    this.movies = [];
    this.movieService.getSearch(search)
    .pipe(
      // take(1)
    )
    .subscribe(
      res => {
        if(res.results.lenght === 0) {
          this.message = 'No existen resultados para tú búsqueda';
        }
        this.movieStorage = res.results;
        this.movies = res.results.slice(0, this.viewCount);
        console.log(this.movies);
      },
      err => {
        console.log(err);
      },
      () => {
        //Peticion finalizada
      }
    )
  }

}