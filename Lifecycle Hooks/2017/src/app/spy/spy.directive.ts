import {Directive, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from '../logger.service';

let nextId = 1;

@Directive({
  selector: '[appSpy]',
})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) {
  }

  /**
   * 使用ngOnInit()有两个原因：
   * 1.在构造函数之后马上执行复杂的初始化逻辑
   * 2.在Angular设置完输入属性之后，对该组件进行准备。
   *
   * 另外还要记住，在指令的构造函数完成之前，那些被绑定的输入属性还都没有值。
   * 如果我们需要基于这些属性的值来初始化这个指令，这种情况就会出问题。
   * 而当ngOnInit()执行的时候，这些属性都已经被正确的赋值过了。
   *
   * 我们访问这些属性的第一次机会，实际上是ngOnChanges()方法，Angular会在ngOnInit()之前调用它。
   * 但是在那之后，Angular还会调用ngOnChanges()很多次。而ngOnInit()只会被调用一次。
   *
   * 你可以信任Angular会在创建组件后立刻调用ngOnInit()方法。 这里是放置复杂初始化逻辑的好地方。
   */
  ngOnInit(): void {
    this.logIt(`OnInit`);
  }

  /**
   * 一些清理逻辑必须在Angular销毁指令之前运行，把它们放在ngOnDestroy()中。
   * 这是在该组件消失之前，可用来通知应用程序中其它部分的最后一个时间点。
   * 这里是用来释放那些不会被垃圾收集器自动回收的各类资源的地方。
   * 取消那些对可观察对象和DOM事件的订阅。停止定时器。
   * 注销该指令曾注册到全局服务或应用级服务中的各种回调函数。
   * 如果不这么做，就会有导致内存泄露的风险。
   */
  ngOnDestroy(): void {
    this.logIt(`OnDestroy`);
  }

  private logIt(msg: string) {
    this.logger.log(`Spy #${nextId++} ${msg}`);
  }
}
