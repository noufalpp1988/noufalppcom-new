import { Directive,OnInit, ElementRef, Renderer2,HostListener,OnDestroy } from '@angular/core';  // Directive ,ElementRef for directive. Renderer is used to set properties on our elements (in mobile, desktop,..)

@Directive({  // directive decorator
  selector: '[bodyDirect]'     // follows CSS rules like .className{....},here [....]
})
export class BodyDirectDirective {

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
  }


  ngOnInit(){
    // this._renderer.addClass(this._el.nativeElement, 'safa');
  }

  ngOnDestroy(){
    
  }
}
