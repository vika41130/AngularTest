import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostDirective]'
})
export class HostDirective {

  constructor() {
    console.log('appHostDirective');
  }

  @HostBinding('attr.role') role = 'admin';
  @HostBinding('class.valid') get valid() {return false;};

  @HostListener('click') onClick() {
    this.role = this.role === 'admin' ? 'guest' : 'admin';
  }

}
