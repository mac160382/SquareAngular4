import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'  
})
export class CrearComponent {
  lugar:any = {};
  id: any = null;
  title: any = null;

  constructor(private router: ActivatedRoute, private lugaresService: LugaresService)
  { 
    this.id = this.router.snapshot.params['id'];    
    
    if(this.id != 'new')
    {
      this.title = "Editar lugar";
      lugaresService.getSelecterItem(this.id).valueChanges()
      .subscribe((lugar)=> { 
        this.lugar = lugar;
        console.log(lugar);
      });
    }
    else{
      this.title = "Crear lugar";
    }
  }

  guardarLugar(){       
    if(this.id == 'new')
    {
      this.saveLugar();
    }
    else
    {
      this.UpdateLugar();
    }   
  }

  saveLugar()
  {
    this.lugar.id = Date.now();
    this.lugaresService.guardarLugar(this.lugar)
      .subscribe((items) => {
        console.log(items);
        alert("Negocio guardado con exito");
        this.lugar = {};
      });    
  }

  UpdateLugar()
  {    
    this.lugaresService.actualizarLugar(this.lugar);
  }
}
