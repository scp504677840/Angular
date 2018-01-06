import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit,
  SimpleChanges
} from '@angular/core';
import {LoggerService} from '../logger.service';
import {PeekABoo} from './peek-a-boo';

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.css'],
  providers: [LoggerService]
})
export class PeekABooComponent extends PeekABoo implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() name: string;

  private varb = 'initialized';

  private loger: LoggerService;

  constructor(private loger: LoggerService) {
    super(loger);
    this.loger = loger;

    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);

  }

  ngOnChanges(changes: SimpleChanges): void {

    // 记录改变的消息列表
    const changesMsgs: string[] = [];

    // 遍历改变之前的值数组
    for (const propName in changes) {

      // 当属性名为 name 时
      if (propName === 'name') {
        // 记录上一个name属性的值
        const name = changes['name'].currentValue;
        // 将上一个name的值存入改变数组中
        changesMsgs.push(name);
      } else {
        changesMsgs.push(propName + ' ' + this.varb);
      }

    }

    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    // 下一次这将是一个变化
    this.varb = 'changed';
  }

  /*ngOnInit() {
    this.logIt(`OnInit`);
  }*/

  ngDoCheck(): void {
    this.logIt(`DoCheck`);
  }

  ngAfterContentInit(): void {
    this.logIt(`AfterContentInit`);
  }

  ngAfterContentChecked(): void {
    this.logIt(`AfterContentChecked`);
  }

  ngAfterViewChecked(): void {
    this.logIt(`AfterViewChecked`);
  }

  ngAfterViewInit(): void {
    this.logIt(`AfterViewInit`);
  }

  ngOnDestroy(): void {
    this.logIt(`OnDestroy`);
  }

}
