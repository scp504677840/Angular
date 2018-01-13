import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-keyup-1',
  templateUrl: './keyup-1.component.html',
  styleUrls: ['./keyup-1.component.css']
})
export class Keyup1Component implements OnInit {

  values1 = '';
  values2 = '';
  values3 = '';

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * 写法一：
   * 没有类型信息
   * @param event
   */
  onKey1(event: any) {
    this.values1 += event.target.value + ' | ';
  }

  /**
   * 写法二：
   * 有类型信息
   * @param {KeyboardEvent} event
   */
  onKey2(event: KeyboardEvent) {
    this.values2 += (<HTMLInputElement>event.target).value + ' | ';
  }

  /**
   * 附加：
   * 用event.key替代event.target.value
   * 此时获取的是键值，而不是元素的属性值。
   * 例如：
   * 用户输入a，event.key = a；event.target.value = a;
   * 用户继续输入b, event.key = b; event.target.value = ab;
   * 用户继续输入c, event.key = c; event.target.value = abc;
   * 用户继续输入回退键(<-Backspace，也称删除键)，event.key = Backspace; event.target.value = ab;
   * @param {KeyboardEvent} event
   */
  onKey3(event: KeyboardEvent) {
    this.values3 += event.key
  }

}
