import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

  /**
   * 日志列表
   *
   * @type {any[]}
   */
  logs: string[] = [];

  /**
   * 上一个消息
   *
   * @type {string} 消息
   */
  prevMsg = '';

  /**
   * 上一个消息出现的总次数
   *
   * @type {number} 消息出现的总次数
   */
  prevMsgCount = 1;

  log(msg: string) {
    // 当当前日志与上一个日志相同时
    if (msg === this.prevMsg) {
      // 将日志列表的最后一个日志设置为当前日志(上一个日志出现的次数+1)x
      this.logs[this.logs.length - 1] = msg + `(${this.prevMsgCount += 1}x)`;
    } else {
      // 说明该消息为新消息
      // 将该消息设置为上一个消息
      this.prevMsg = msg;
      // 将上一个消息出现的总次数为1
      this.prevMsgCount = 1;
      // 将该消息存入日志列表
      this.logs.push(msg);
    }
  }

  clear() {
    this.logs.length = 0;
  }

  tick() {
    // 安排一个视图刷新，以确保显示赶上
    this.tick_then(() => {
    });
  }

  tick_then(fn: () => any) {
    setTimeout(fn, 0);
  }

}
