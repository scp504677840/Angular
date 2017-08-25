import {Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit {

  title = '我是标题';

  divContent = '<div><h1>自定义</h1></div>';

  message = 'Hi';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('父组件内容投影ngAfterContentInit初始化完毕！');
    this.message = 'ngAfterContentInit方法中改变这个值！';
  }

  ngAfterContentChecked(): void {
    console.log('父组件内容投影ngAfterContentChecked变更检测完毕！');
  }

  ngAfterViewInit(): void {
    console.log('父组件内容ngAfterViewInit初始化完毕！');
  }

}
