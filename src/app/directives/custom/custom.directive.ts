import { AfterContentInit, ContentChildren, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customDiresctive], customDirective',
})
export class CustomDirective implements AfterContentInit {

  @ContentChildren('h1') contentRef!: ElementRef;
  constructor(
    private elementRef: ElementRef
  ) {
    console.log('elementRef', this.elementRef.nativeElement);
  }
  
  ngAfterContentInit(): void {
    console.log('contentRef', this.contentRef);
  }

}
