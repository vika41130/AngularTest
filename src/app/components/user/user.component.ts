import { AfterViewInit, Component, ViewChild, ViewChildren } from '@angular/core';
import { Test1Component } from '../test1/test1.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements AfterViewInit {

  @ViewChildren('test1') test1!: Array<Test1Component>;

  constructor() {

  }

  ngAfterViewInit(): void {
    console.log({test1: this.test1});
  }

}
