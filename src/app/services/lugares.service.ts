import {Injectable} from "@angular/core";
@Injectable()
export class LugaresService
{    
    lugares:any = [
        {id:1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Donas la padadita', descripcion: 'Descripcion de este negocio. Más adelante tendremos informacion' },
        {id:2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Veterinaria Huelliltas Felices', descripcion: 'Descripcion de este negocio. Más adelante tendremos informacion'},
        {id:3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Floreria la Gardenia',  descripcion: 'Descripcion de este negocio. Más adelante tendremos informacion'},
      ];

    public getLugares()
    {
        return this.lugares;
    }

    public getSelecterItem(id)
    {
        return this.lugares.filter((lugar) => {return lugar.id == id })[0] || null;
    }
}