import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoMaterial';

  x = 'Freezer'; // function hacia un hijo
  rpta: number = 0; //

  recibirResultado (e: any) {
    this.rpta = e;
  }

}
