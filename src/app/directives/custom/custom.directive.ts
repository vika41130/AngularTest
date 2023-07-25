import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[customDirective]',
})
export class CustomDirective implements OnChanges, OnInit, AfterViewInit {

  @Input() prop1 = '';
  @Input() test1Prop = '';

  constructor(
    private elementRef: ElementRef
  ) {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
  }

  ngOnInit(): void {
      console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    const prop1 = this.elementRef.nativeElement.getAttribute('prop1');
    console.log({prop1});
    this.elementRef.nativeElement.setAttribute('prop2', '2');
  }

}
