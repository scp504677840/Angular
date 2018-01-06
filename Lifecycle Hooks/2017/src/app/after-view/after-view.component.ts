import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildViewComponent} from '../child-view/child-view.component';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css'],
  providers: [LoggerService]
})
export class AfterViewComponent implements OnInit, AfterViewInit, AfterViewChecked {

  /**
   * 之前的英雄
   *
   * @type {string}
   */
  private prevHero = '';

  /**
   * 评论
   *
   * @type {string}
   */
  comment = '';

  /**
   * 查询“ChildViewComponent”类型的VIEW子元素
   */
  @ViewChild(ChildViewComponent) childView: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  ngOnInit() {
  }

  /**
   * AfterView例子展示了AfterViewInit()和AfterViewChecked()钩子，Angular会在每次创建了组件的子视图后调用它们。
   * 下列钩子基于子视图中的每一次数据变更采取行动，我们只能通过带@ViewChild装饰器的属性来访问子视图。
   *
   * #1
   * 注意，Angular会频繁的调用AfterViewChecked()，甚至在并没有需要关注的更改时也会触发。
   * 所以务必把这个钩子方法写得尽可能精简，以免出现性能问题。
   */
  ngAfterViewInit(): void {
    // 视图初始化后，viewChild被设置
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked(): void {
    // 视图被检查后，ChildView被更新
    // 当之前当英雄与子组件的英雄相等时
    if (this.prevHero === this.childView.hero) {
      // 记录日志
      this.logIt(`AfterViewChecked (no change)`);
    } else {
      // 记录当前的英雄
      this.prevHero = this.childView.hero;
      // 记录日志
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  /**
   * 这个真正的商业逻辑代理设置了“comment”
   *
   * 遵循单向数据流规则
   * 当英雄的名字超过10个字符时，doSomething()方法就会更新屏幕。
   * 为什么在更新comment属性之前，doSomething()方法要等上一拍(tick)？
   * Angular的“单向数据流”规则禁止在一个视图已经被组合好之后再更新视图。
   * 而这两个钩子都是在组件的视图已经被组合好之后触发的。
   * 如果我们立即更新组件中被绑定的comment属性，Angular就会抛出一个错误(试试!)。
   * LoggerService.tick_then()方法延迟更新日志一个回合（浏览器JavaScript周期回合），这样就够了。
   */
  private doSomething() {
    // 当子组件中当英雄名称长度超过10返回That's a long name，否则返回空字符串。
    const c = this.childView.hero.length > 10 ? `That's a long name` : '';
    // 当名称不等于之前记录当名称时
    if (c !== this.comment) {
      // 等待调用，因为组件的视图已被检查
      this.logger.tick_then(() => this.comment = c);
    }
  }

  private logIt(method: string) {
    // 记录子组件
    const child = this.childView;
    // 日志消息=方法名称 + 当存在子组件时返回子组件中的英雄，否则返回no；child view
    const message = `${method}: ${child ? child.hero : 'no'} child view`;
    // 记录日志
    this.logger.log(message);
  }
}
