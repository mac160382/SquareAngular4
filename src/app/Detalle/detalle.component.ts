import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'  
})
export class DetalleComponent {
  id: number;
  lugar:any = {};
  lugares:any = [
    {id:1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Donas la padadita', descripcion: 'Descripcion de este negocio. Más adelante tendremos informacion' },
    {id:2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Veterinaria Huelliltas Felices', descripcion: 'Descripcion de este negocio. Más adelante tendremos informacion'},
    {id:3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Floreria la Gardenia',  descripcion: 'Descripcion de este negocio. Más adelante tendremos informacion'},
  ];

  constructor(private router: ActivatedRoute){
    console.log(this.router.snapshot.params['id']);
    console.log(this.router.snapshot);
    console.log(this.router.snapshot.queryParams['action2']);
    console.log(this.router.snapshot.queryParams['referer']);

    this.id = this.router.snapshot.params['id'];
    this.lugar = this.getSelecterItem();
    console.log(this.lugar);    
  }  

  getSelecterItem()
  {
    return this.lugares.filter((lugar) => {return lugar.id == this.id })[0] || null;
  }
}
