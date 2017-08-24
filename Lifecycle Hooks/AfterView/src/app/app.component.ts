import {Component, ViewChild, OnInit, AfterViewInit, AfterViewChecked} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('child1')
  child1: ChildComponent;

  message: string;

  constructor() {
  }

  ngOnInit(): void {
    // this.child1.greeting('Tom');
  }

  /**
   * Angular会在每次创建了组件的子视图后调用它们
   */
  ngAfterViewInit(): void {
    // ERROR：Angular禁止在组件初始化好之后去改变视图
    // this.message = 'Hello';

    // 解决原理：让这个事件去javascript另一个运行周期里面去运行就好了
    // 解决方法：
    setTimeout(() => {
      this.message = 'Hello';
    }, 0);
    console.log('父组件的视图初始化完毕！');
  }

  /**
   * Angular会在每次创建了组件的子视图后调用它们
   */
  ngAfterViewChecked(): void {
    // ERROR：Angular禁止在组件初始化好之后去改变视图
    // this.message = 'Hello';
    console.log('父组件的视图变更检测完毕！');
  }

}
