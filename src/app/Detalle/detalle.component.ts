import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'  
})
export class DetalleComponent {
  constructor(private router: ActivatedRoute){
    console.log(this.router.snapshot.params['id']);
    console.log(this.router.snapshot);
    console.log(this.router.snapshot.queryParams['action2']);
    console.log(this.router.snapshot.queryParams['referer']);
  }  
}
