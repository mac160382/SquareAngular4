import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'  
})
export class LugaresComponent {
  title = 'Square Angular 4';
  
  lugares:any = [
    {active: true, nombre:'Floreria la Gardenia'},
    {active: true, nombre:'Donas la padadita'},
    {active: true, nombre:'Veterinaria Huelliltas Felices'},
  ];

  lat:number = 4.6560663;
  lng:number = -74.0595918;

  constructor()
  {  	
  }  
}