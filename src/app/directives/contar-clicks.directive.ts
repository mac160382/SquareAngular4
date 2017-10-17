/*
	Host Listeners

	Nos ayudan a escuchar los eventos de manera muy sencilla, tiene tres parámetros, el evento, el objetivo del evento y el código a ejecutar cuando se ejecute el evento.

	Host Binding

	nos permite editar elementos del DOM o el HTML al que esté asignado desde nuestra directiva	
*/

import {Directive, HostListener, HostBinding} from "@angular/core";
@Directive({
	/*Solo aplica hipervinculos y es un directiva de atriburo*/
	selector: 'li[contar-clicks]'
})
export class ContarClicksDirective{
	clickN = 0;

	//Editamos directamente el estilo de opacidad.	
	@HostBinding('style.opacity') opacity: number = 0.1;

	//P1. Eventos de html
	//P2. Origines (Ej. Boton) con los que estamos interactuando
	//P3. Evento que se va a ejecutar despues del vinculo
	@HostListener('click', ['$event.target']) onClick(btn){
		console.log('a', btn, "Numero de clicks:", this.clickN++);

		//con el incremento del contador se aumenta la opacidad
		this.opacity+=.1;
	}
}