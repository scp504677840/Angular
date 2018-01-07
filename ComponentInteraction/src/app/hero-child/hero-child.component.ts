import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {

  @Input() hero: Hero;

  /**
   * 第二个@Input为子组件的属性名masterName指定一个别名master(译者注：不推荐为起别名，请参见风格指南).
   * 父组件HeroParentComponent把子组件的HeroChildComponent放到*ngFor循环器中，
   * 把自己的master字符串属性绑定到子组件的master别名上，
   * 并把每个循环的hero实例绑定到子组件的hero属性。
   */
  @Input('master') masterName: string;

  constructor() {
  }

  ngOnInit() {
  }

}
