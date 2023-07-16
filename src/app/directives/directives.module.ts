import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostDirective } from './components/host/host.directive';


@NgModule({
  declarations: [
    HostDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HostDirective
  ]
})
export class DirectivesModule { }
