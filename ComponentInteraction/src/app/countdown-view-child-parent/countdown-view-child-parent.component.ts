import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CountdownViewChildComponent} from '../countdown-view-child/countdown-view-child.component';

@Component({
  selector: 'app-countdown-view-child-parent',
  templateUrl: './countdown-view-child-parent.component.html',
  styleUrls: ['./countdown-view-child-parent.component.css']
})
export class CountdownViewChildParentComponent implements OnInit, AfterViewInit {

  @ViewChild(CountdownViewChildComponent)
  private timerComponent: CountdownViewChildComponent;

  constructor() {
  }

  ngOnInit() {
  }

  seconds() {
    return 0;
  }

  ngAfterViewInit(): void {
    // 重定义`seconds（）`从CountdownViewChildComponent.seconds`获得...
    // 但是先等待一下，以避免一次性devMode
    // 单向数据流违规错误
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

}
