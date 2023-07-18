import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { DirectivesModule } from '../directives/directives.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';



@NgModule({
  declarations: [
    UserComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    DirectivesModule,
  ],
  exports: [
    UserComponent,
  ]
})
export class ComponentsModule { }
