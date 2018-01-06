import {Component, OnInit, ViewChild} from '@angular/core';
import {Hero} from '../hero';
import {OnChangesComponent} from '../on-changes/on-changes.component';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css']
})
export class OnChangesParentComponent implements OnInit {

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
  title = 'OnChanges';

  /**
   * 子组件
   */
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor() {
    this.reset();
  }

  ngOnInit() {
  }

  reset() {

    // 新的英雄对象每次触发onChanges
    this.hero = new Hero('Windstorm');

    // 如果这个值不同，设置力量只触发onChanges
    this.power = 'sing';

    // 当子组件存在时
    if (this.childView) {
      this.childView.reset();
    }
  }

}
