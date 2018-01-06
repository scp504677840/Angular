import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
  styleUrls: ['./peek-a-boo-parent.component.css'],
  providers: [LoggerService]
})
export class PeekABooParentComponent implements OnInit {

  /**
   * 是否含有子组件
   * @type {boolean}
   */
  hasChild = false;

  /**
   * 英雄名称
   * @type {string}
   */
  heroName = 'Windstorm';

  /**
   * 日志服务
   */
  private logger: LoggerService;

  /**
   * 日志列表
   */
  hookLog: string[];

  constructor(private logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  ngOnInit() {
  }

  toggleChild() {
    // 更改hasChild标识
    this.hasChild = !this.hasChild;
    // 当有子组件时
    if (this.hasChild) {
      // 重置英雄名称
      this.heroName = 'Windstorm';
      // 清空日志列表
      this.logger.clear();
    }
    // 更新日志
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }

}
