import { AfterContentInit, AfterViewInit, ContentChild, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customDirective], customDirective',
})
export class CustomDirective implements AfterContentInit, AfterViewInit {

  @ContentChild('inside') inside!: ElementRef;

  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngAfterContentInit(): void {
      console.log(this.inside);
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.innerHTML = this.inside.nativeElement.innerHTML;
  }

}
