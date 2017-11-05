import {Injectable} from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class LugaresService
{    
    lugares:any = [
        {id:1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Donas la padadita', descripcion: 'Descripcion de este negocio. Más adelante tendremos informacion' },
        {id:2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Veterinaria Huelliltas Felices', descripcion: 'Descripcion de este negocio. Más adelante tendremos informacion'},
        {id:3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Floreria la Gardenia',  descripcion: 'Descripcion de este negocio. Más adelante tendremos informacion'},
      ];
      
    constructor(private fbDataBase:AngularFireDatabase)
    {
    }

    public getLugares()
    {   
        return this.fbDataBase.list('lugares/');
    }

    public getSelecterItem(id)
    {
        return this.fbDataBase.object('lugares/'+ id);       
    }

    public guardarLugar(lugar)
    {        
        this.fbDataBase.database.ref('lugares/'+ lugar.id).set(lugar);
    }

    public actualizarLugar(lugar)
    {
        console.log(lugar);
        this.fbDataBase.database.ref('lugares/'+ lugar.id).set(lugar);
    }

    public borrarLugar(lugar)
    {   
        this.fbDataBase.object('lugares/'+ lugar.id).remove();
    }
}