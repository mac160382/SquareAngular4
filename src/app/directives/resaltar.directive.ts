/*
	Directiva de atributo
	
	directiva propia para resaltar aquellos negocios que te estén pagando por publicidad.
*/

import {Directive, OnInit, ElementRef, Renderer2, Input} from "@angular/core";
@Directive({
	selector: '[resltar]'
})
export class ResaltarDirective implements OnInit{
	constructor(private elRef: ElementRef, private renderer: Renderer2){}
	@Input('resltar') plan : string = '';
	ngOnInit(){
		if(this.plan == 'pagado')
		{
			this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
			this.renderer.setStyle(this.elRef.nativeElement, 'font-weight','bold');
		}
	}
}