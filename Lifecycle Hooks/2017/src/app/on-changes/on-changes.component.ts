import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Hero} from '../hero';

/**
 * 一旦检测到该组件(或指令)的输入属性发生了变化，Angular就会调用它的ngOnChanges()方法。
 */
@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit, OnChanges {

  /**
   * 英雄
   *
   * @deprecated 输入属性
   */
  @Input() hero: Hero;

  /**
   * 能力
   *
   * @deprecated 输入属性
   */
  @Input() power: string;

  /**
   * 日志列表
   *
   * @type {any[]}
   */
  changesLog: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * ngOnChanges()方法获取了一个对象，它把每个发生变化的属性名都映射到了一个SimpleChange对象，
   * 该对象中有属性的当前值和前一个值。我们在这些发生了变化的属性上进行迭代，并记录它们。
   *
   * #1
   * 当power属性的字符串值变化时，相应的日志就出现了。 但是ngOnChanges并没有捕捉到hero.name的变化。 这是第一个意外。
   * #2
   * Angular只会在输入属性的值变化时调用这个钩子。
   * 而hero属性的值是一个到英雄对象的引用。
   * Angular不会关注这个英雄对象的name属性的变化。
   * 这个英雄对象的引用没有发生变化，于是从Angular的视角看来，也就没有什么需要报告的变化了。
   *
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changesLog.push(`${propName}: currentValue = ${cur}, perviousValue = ${prev}`);
    }
  }

  reset() {
    this.changesLog.length = 0;
  }

}
