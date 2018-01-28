import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const HEROES = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];

@Injectable()
export class HeroService {

  /**
   * 获取英雄列表
   *
   * @returns {Observable<Hero[]>} 英雄列表
   */
  getHeroes() {
    return Observable.of(HEROES);
  }

  /**
   * 获取英雄
   *
   * @param {number | string} id 英雄ID
   * @returns {Observable<any>} 英雄
   */
  getHero(id: number | string) {
    // （+）在`id`之前将字符串转换为一个数字
    return this.getHeroes().map(heroes => heroes.find(hero => hero.id === +id));
  }

}
