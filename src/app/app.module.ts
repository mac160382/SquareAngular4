import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { ResaltarDirective } from './directives/resaltar.directive';

import { ContarClicksDirective } from './directives/contar-clicks.directive';

import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle', component: DetalleComponent},
]

@NgModule({
  declarations: [
  /*Agregado de componentes*/
    AppComponent,
    //Reslta en amarillo los elementos de la lista que estan en amarillo
    ResaltarDirective,
    //Identifica cuantos clicks se le han hecho al hipervinculo
    ContarClicksDirective,
    //Se realiza la creacion del producto  
    DetalleComponent,

    LugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAd3xU7sELOUbRyIhdCv1wVtNsSaA8BE4'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
