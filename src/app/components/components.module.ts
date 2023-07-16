import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
    UserComponent
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
