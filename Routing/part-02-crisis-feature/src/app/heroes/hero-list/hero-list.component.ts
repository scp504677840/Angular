import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../hero';
import 'rxjs/add/operator/switchMap';

/**
 * 路由参数：必须还是可选？
 * 如果想导航到HeroDetailComponent以对id为15的英雄进行查看并编辑，就要在路由的URL中使用路由参数来指定必要参数值。
 * localhost:4200/hero/15
 * 我们也能在路由请求中添加可选信息。
 * 比如，当从HeroDetailComponent返回英雄列表时，如果能自动选中刚刚查看过的英雄就好了。
 *
 * 如果我们能在从HeroDetailComponent返回时在URL中带上英雄Magneta的id，不就可以了吗？接下来我们就尝试实现这个场景。
 * 可选信息有很多种形式。搜索条件通常就不是严格结构化的，比如name='wind*'；
 * 有多个值也很常见，如after='12/31/2015'&before='1/1/2017'；
 * 而且顺序无关，如before='1/1/2017'&after='12/31/2015'，还可能有很多种变体格式，如during='currentYear'。
 *
 * 这么多种参数要放在URL的路径中可不容易。
 * 即使我们能制定出一个合适的URL方案，实现起来也太复杂了，得通过模式匹配才能把URL翻译成命名路由。
 *
 * 可选参数是在导航期间传送任意复杂信息的理想载体。
 * 可选参数不涉及到模式匹配并在表达上提供了巨大的灵活性。
 *
 * 和必要参数一样，路由器也支持通过可选参数导航。
 * 我们在定义完必要参数之后，通过一个独立的对象来定义可选参数。
 *
 * 通常，对于强制性的值（比如用于区分两个路由路径的）使用必备参数；
 * 当这个值是可选的、复杂的或多值的时，使用可选参数。
 */
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  private selectedId: number;

  constructor(private service: HeroService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.switchMap((params: ParamMap) => {
      this.selectedId = +params.get('id');
      return this.service.getHeroes();
    });
  }

}
