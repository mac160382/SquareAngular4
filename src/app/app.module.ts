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
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDQz9RBQ2wmnX-ko_n7q_Q5q7AFwqH7ivk",
  authDomain: "square-c6f7f.firebaseapp.com",
  databaseURL: "https://square-c6f7f.firebaseio.com",
  storageBucket: "square-c6f7f.appspot.com",
  messagingSenderId: "625782250314"
};

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear/:id', component: CrearComponent}
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
    //Mapa de ubicacion
    LugaresComponent,
    //Obtener comentarios
    ContactoComponent,
    //Crear un lugar
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAd3xU7sELOUbRyIhdCv1wVtNsSaA8BE4'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule    
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
