import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'  
})
export class LugaresComponent {
  title = 'Square Angular 4';
  
  lugares:any = [
    {id:1, active: true, nombre:'Donas la padadita'},
    {id:2, active: true, nombre:'Veterinaria Huelliltas Felices'},
    {id:3, active: true, nombre:'Floreria la Gardenia'},
  ];

  lat:number = 4.6560663;
  lng:number = -74.0595918;

  constructor()
  {  	
  }  
}
