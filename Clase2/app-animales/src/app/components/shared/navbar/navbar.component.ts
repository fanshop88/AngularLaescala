import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//navigate = doctor/1
//navigatebyUrl = home
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscarAnimal( termino:string ){
    console.log(termino);
    this.router.navigate( ['/buscar',termino] );
  }


}