import {AfterContentChecked, AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';
import {ChildViewComponent} from '../child-view/child-view.component';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css']
})
export class AfterContentComponent implements OnInit, AfterContentInit, AfterContentChecked {

  private prevHero = '';

  comment = '';

  @ContentChild(ChildViewComponent) contentChild: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngOnInit() {
  }

  /**
   * AfterContent钩子
   * AfterContent例子展示了AfterContentInit()和AfterContentChecked()钩子，
   * Angular会在外来内容被投影到组件中之后调用它们。
   *
   * 内容投影
   * 内容投影是从组件外部导入HTML内容，并把它插入在组件模板中指定位置上的一种途径。
   * AngularJS的开发者大概知道一项叫做transclusion的技术，对，这就是它的马甲。
   * 对比前一个例子考虑这个变化。
   * 这次，我们不再通过模板来把子视图包含进来，而是改从AfterContentComponent的父组件中导入它。
   * 下面是父组件的模板：
   * <app-after-content>
   *      <app-child-view></app-child-view>
   * </app-after-content>
   * 注意，<app-child-view>标签被包含在<app-after-content>标签中。
   * 永远不要在组件标签的内部放任何内容 —— 除非我们想把这些内容投影进这个组件中。
   * 现在来看下<app-after-content>组件的模板：
   * <div>-- projected content begins --</div>
   *      <ng-content></ng-content>
   * <div>-- projected content ends --</div>
   * <ng-content>标签是外来内容的占位符。
   * 它告诉Angular在哪里插入这些外来内容。
   * 在这里，被投影进去的内容就是来自父组件的<app-child-view>标签。
   * 下列迹象表明存在着内容投影：
   * #1 在组件的元素标签中有HTML
   * #2 组件的模板中出现了<ng-content>标签
   *
   * AfterContent钩子
   * AfterContent钩子和AfterView相似。
   * 关键的不同点是子组件的类型不同。
   * #1 AfterView钩子所关心的是ViewChildren，这些子组件的元素标签会出现在该组件的模板里面。
   * #2 AfterContent钩子所关心的是ContentChildren，这些子组件被Angular投影进该组件中。
   * 下列AfterContent钩子基于子级内容中值的变化而采取相应的行动，
   * 这里我们只能通过带有@ContentChild装饰器的属性来查询到“子级内容”。
   *
   * 使用AfterContent时，无需担心单向数据流规则
   * 该组件的doSomething()方法立即更新了组件被绑定的comment属性。
   * 它不用等下一回合。
   * 回忆一下，Angular在每次调用AfterView钩子之前也会同时调用AfterContent。
   * Angular在完成当前组件的视图合成之前，就已经完成了被投影内容的合成。
   * 所以我们仍然有机会去修改那个视图。
   *
   */
  ngAfterContentInit(): void {
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked(): void {

    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }

  }

  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    const child = this.contentChild;
    const message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }

}
