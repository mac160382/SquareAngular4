/*Definicion de los componentes y aquie es donde queda el VM*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Square with Angular 4';
  listo = false;
  lugares:any = [
    {plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Floreria la Gardenia'},
    {plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la padadita'},
    {plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huelliltas Felices'},
    {plan: 'pagado', cercania: 3, distancia: 10, active: false, nombre:'Juan Valez cafeteria'},
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
