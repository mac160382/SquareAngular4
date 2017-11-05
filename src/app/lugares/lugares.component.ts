import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'  
})
export class LugaresComponent {
  title = 'Square Angular 4';
  lugares = null;
    
  lat:number = 4.6560663;
  lng:number = -74.0595918;

  constructor(private lugaresService: LugaresService)
  { 
    /*
    lugaresService.getLugares().valueChanges()
      .subscribe(lugares => {        
        this.lugares = lugares; 
      });    */
      lugaresService.getLugares().subscribe((lugares)=> {        
        this.lugares = lugares.json();
        var me = this; // Esto se tiene que utilizar por problemas en el scope dentro de la function del Map
        me.lugares = Object.keys(me.lugares).map(function(key) { return me.lugares[key]; });
      });
  }  

  deleteItem(lugar)
  {
    console.log(lugar);
    alert("borrar");
    this.lugaresService.borrarLugar(lugar);
  }
}
