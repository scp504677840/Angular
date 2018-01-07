import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-view-child',
  templateUrl: './countdown-view-child.component.html',
  styleUrls: ['./countdown-view-child.component.css']
})
export class CountdownViewChildComponent implements OnInit, OnDestroy {

  /**
   * 定时器
   * @type {number}
   */
  intervalId = 0;

  /**
   * 消息
   * @type {string}
   */
  message = '';

  /**
   * 时间
   * @type {number}
   */
  seconds = 11;

  constructor() {
  }

  ngOnInit() {
    this.start();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  /**
   * 清除计时
   */
  clearTimer() {
    // 取消setInterval()方法设置的定时器
    clearInterval(this.intervalId);
  }

  /**
   * 开始计时
   */
  start() {
    this.countDown();
  }

  /**
   * 停止计时
   */
  stop() {
    // 清除计时
    this.clearTimer();
    // 设置消息
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  /**
   * 倒计时
   */
  private countDown() {
    // 清除之前的计时
    this.clearTimer();
    // 创建新的计时
    this.intervalId = window.setInterval(() => {

      // 每秒时间减1
      this.seconds -= 1;

      // 当时间为0时
      if (this.seconds === 0) {
        // 计时结束
        this.message = 'Blast off!';
      } else {
        // 重置时间
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        // 设置消息
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

}
