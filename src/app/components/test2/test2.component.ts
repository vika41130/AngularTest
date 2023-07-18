import { AfterViewInit, Component, ContentChild, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements AfterViewInit {

  @ContentChildren('test1') test2!: Array<Test2Component>;

  ngAfterViewInit(): void {
      console.log({test2: this.test2});
  }

}
