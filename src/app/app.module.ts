import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
  /*Agregado de componentes*/
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAd3xU7sELOUbRyIhdCv1wVtNsSaA8BE4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
