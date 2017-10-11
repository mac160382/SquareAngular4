/*Definicion de los componentes y aquie es donde queda el VM*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Square with Angular 4';
  a = 3;
  b = 5;
  listo = false;
  nombre:string = '';
  lugares:any = [
    {active: true, nombre:'Floreria la Gardenia'},
    {active: true, nombre:'Donas la padadita'},
    {active: true, nombre:'Veterinaria Huelliltas Felices'},
  ];

  lat:number = 4.6560663;
  lng:number = -74.0595918;

  constructor()
  {
  	setTimeout(()=> {this.listo = true}, 3000);
  }

  hacerAlgo()
  {
  	alert("Boton Agregado");
  }
}
