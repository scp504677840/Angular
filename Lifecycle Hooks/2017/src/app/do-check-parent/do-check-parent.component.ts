import {Component, DoCheck, Input, OnInit, ViewChild} from '@angular/core';
import {Hero} from '../hero';
import {DoCheckComponent} from '../do-check/do-check.component';

@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['./do-check-parent.component.css']
})
export class DoCheckParentComponent implements OnInit {

  /**
   * 英雄
   */
  hero: Hero;

  /**
   * 能力
   */
  power: string;

  /**
   * 标题
   * @type {string}
   */
  title = 'DoCheck';

  /**
   * 子组件
   */
  @ViewChild(DoCheckComponent) childView: DoCheckComponent;

  constructor() {
    this.reset();
  }

  ngOnInit() {
  }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
