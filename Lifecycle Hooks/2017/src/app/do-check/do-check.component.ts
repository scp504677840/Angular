import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.css']
})
export class DoCheckComponent implements OnInit, DoCheck {

  /**
   * 英雄
   */
  @Input() hero: Hero;

  /**
   * 能力
   */
  @Input() power: string;

  /**
   * 变化的日志
   * @type {any[]}
   */
  changeLog: string[] = [];

  /**
   * 以前的英雄名称
   * @type {string}
   */
  oldHeroName = '';

  /**
   * 以前的能力
   * @type {string}
   */
  oldPower = '';

  /**
   * 记录变化的标识
   * @type {boolean}
   */
  changeDetected = false;

  /**
   * 没有发生百变化的次数
   * @type {number}
   */
  noChangeCount = 0;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * 使用DoCheck钩子来检测那些Angular自身无法捕获的变更并采取行动。
   * 用这个方法来检测那些被Angular忽略的更改。
   * 该代码检测一些相关的值，捕获当前值并与以前的值进行比较。
   * 当英雄或它的超能力发生了非实质性改变时，我们就往日志中写一条特殊的消息。
   * 这样你可以看到DoCheck被调用的频率。
   *
   * #1
   * 虽然ngDoCheck()钩子可以可以监测到英雄的name什么时候发生了变化。
   * 但我们必须小心。
   * 这个ngDoCheck钩子被非常频繁的调用 —— 在每次变更检测周期之后，发生了变化的每个地方都会调它。
   * 在这个例子中，用户还没有做任何操作之前，它就被调用了超过二十次。
   *
   * #2
   * 大部分检查的第一次调用都是在Angular首次渲染该页面中其它不相关数据时触发的。
   * 仅仅把鼠标移到其它<input>中就会触发一次调用。
   * 只有相对较少的调用才是由于对相关数据的修改而触发的。
   * 显然，我们的实现必须非常轻量级，否则将损害用户体验。
   */
  ngDoCheck(): void {

    // 当英雄名称发生变化时
    if (this.hero.name !== this.oldHeroName) {
      // 将标识设置为已经发生变化
      this.changeDetected = true;
      // 记录改变日志
      this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from ${this.oldHeroName}`);
      // 记录以前的英雄名称
      this.oldHeroName = this.hero.name;
    }

    // 当能力发生变化时
    if (this.power !== this.oldPower) {
      // 将标识设置为已经发生变化
      this.changeDetected = true;
      // 记录改变日志
      this.changeLog.push(`DoCheck: Power changed to "${this.power}" from ${this.oldPower}`);
      // 记录以前的能力
      this.oldPower = this.power;
    }

    // 当有变化时
    if (this.changeDetected) {
      // 将记录没有变化的次数设置为0
      this.noChangeCount = 0;
    } else {
      // 将记录没有变化的次数累加1
      const count = this.noChangeCount += 1;
      // 记录没有变化的日志
      const noChangeMsg = `DoCheck: called ${count}x when on change to hero or power`;
      // 当没有变化的次数等于1时
      if (count === 1) {
        // 添加一个新的没有变化的日志
        this.changeLog.push(noChangeMsg);
      } else {
        // 更新没有变化的日志
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
    }

    // 将变化标识重置为false
    this.changeDetected = false;

  }

  reset() {
    this.changeDetected = true;
    this.changeLog.length = 0;
  }

}
