import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Observable } from 'rxjs/Observable';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({ 
          opacity: 0,
          backgroundColor: 'green',
          transform: 'rotate3d(0,0,0,0deg)' 
       })),
       state('final', style({ 
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,20,30deg)' 
     })),
     transition('inicial=>final', animate(1000)),
     
    ])
  ]
})
export class LugaresComponent {
  title = 'Square Angular 4';
  lugares = null;
  state ='inicial'; 
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
        //this.lugares = lugares.json();
        this.lugares = lugares;
        var me = this; // Esto se tiene que utilizar por problemas en el scope dentro de la function del Map
        me.lugares = Object.keys(me.lugares).map(function(key) { return me.lugares[key]; });
      }, error => { 
        console.log(error); 
        alert("Se presento un problema, disculpe las molestias. Error" + error.status);
      });
  }  

  public animate()
  {
    this.state = (this.state == 'final') ? 'inicial' : 'final';
  }

  deleteItem(lugar)
  {
    console.log(lugar);
    alert("borrar");
    this.lugaresService.borrarLugar(lugar);
  }
}
