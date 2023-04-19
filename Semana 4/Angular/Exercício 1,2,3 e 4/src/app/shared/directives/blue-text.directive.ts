import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[BlueText]'
})
export class BlueTextDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'blue';
  }
}
