import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.css'],
  providers: [LoggerService]
})
export class SpyComponent implements OnInit {

  newName = 'Herbie';

  heroes: string[] = ['Windstorm', 'Magneta'];

  spyLog: string[];

  constructor(private logger: LoggerService) {
    this.spyLog = logger.logs;
  }

  ngOnInit() {
  }

  addHero(hero: string) {
    // 当新名称去除两段空格后还有值时
    // 如 ' abc '去除两端空格后为 'abc'，下面判断为true。
    // 如 '' 去除两端空格后为 ''，下面判断为false。
    if (this.newName.trim()) {
      // 将新名称添加到英雄列表
      this.heroes.push(this.newName.trim());
      // 将新名称置空，下一次无法连续添加，因为newName的值为空。
      this.newName = '';
      // 刷新日志
      this.logger.tick();
    }
  }

  removeHero(hero: string) {
    // 第一个参数：从什么位置开始添加／删除元素
    // 第二个参数：删除几个元素
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    // 刷新日志
    this.logger.tick();
  }

  reset() {
    // 重置日志
    this.logger.log('-- reset --');
    // 重置英雄列表
    this.heroes.length = 0;
    // 刷新日志
    this.logger.tick();
  }

}
