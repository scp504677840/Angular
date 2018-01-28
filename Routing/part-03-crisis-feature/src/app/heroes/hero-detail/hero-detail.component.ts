import {Component, HostBinding, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HeroService} from '../hero.service';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../hero';
import {slideInDownAnimation} from '../../animations';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero$: Observable<Hero>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: HeroService) {
  }

  /**
   * 在ngOnInit方法中，我们用ActivatedRoute服务来接收路由的参数，从参数中取得该英雄的id，并接收此英雄用于显示。
   *
   * paramMap处理有点棘手。 当map改变的时候，你可以从改变的参数中用get（）获取参数。
   * 然后你告诉HeroService使用该id获取英雄，并返回HeroService请求的结果。
   * 由于参数是作为Observable提供的，
   * 所以我们得用switchMap操作符来根据名字取得id参数，
   * 并告诉HeroService来获取带有那个id的英雄。
   * switchMap操作符也会取消以前未完成的在途请求。
   * 如果用户使用新的id再次导航到该路由，而HeroService仍在接受老id对应的英雄，
   * 那么switchMap就会抛弃老的请求，并返回这个新id的英雄信息。
   * 这个可观察对象的Subscription（订阅）将会由AsyncPipe处理，
   * 并且组件的hero属性将会设置为刚刚接收到的这个英雄。
   *
   * ParamMap 参数 API
   * ParamMap API 是参照URLSearchParams 接口来设计的。
   * {
   * URLSearchParams:
   * var paramsString = "q=URLUtils.searchParams&topic=api"
   * var searchParams = new URLSearchParams(paramsString);
   * }
   * 它提供了一些方法来处理对路由参数（paramMap）和查询参数(queryParamMap)中的参数访问。
   *
   * Member 成员  Description 描述
   *
   * has(name)
   * 如果参数名位于参数列表中，就返回 true 。
   *
   * get(name)
   * 如果这个map中有参数名对应的参数值（字符串），就返回它，否则返回null。如果参数值实际上是一个数组，就返回它的第一个元素。
   *
   * getAll(name)
   * 如果这个map中有参数名对应的值，就返回一个字符串数组，否则返回空数组。当一个参数名可能对应多个值的时候，请使用getAll。
   *
   * keys
   * 返回这个map中的所有参数名组成的字符串数组。
   *
   * 参数的可观察对象（Observable）与组件复用
   *
   * 在这个例子中，我们订阅了路由参数的Observable对象。
   * 这种写法暗示着这些路由参数在该组件的生存期内可能会变化。
   *
   * 确实如此！默认情况下，如果它没有访问过其它组件就导航到了同一个组件实例，
   * 那么路由器倾向于复用组件实例。如果复用，这些参数可以变化。
   *
   * 假设父组件的导航栏有“前进”和“后退”按钮，用来轮流显示英雄列表中中英雄的详情。
   * 每次点击都会强制导航到带前一个或后一个id的HeroDetailComponent组件。
   *
   * 我们不希望路由器仅仅从DOM中移除当前的HeroDetailComponent实例，并且用下一个id重新创建它。
   * 那可能导致界面抖动。 更好的方式是复用同一个组件实例，并更新这些参数。
   *
   * 不幸的是，ngOnInit对每个实例只调用一次。
   * 我们需要一种方式来检测在同一个实例中路由参数什么时候发生了变化。
   * 而params属性这个可观察对象（Observable）干净漂亮的处理了这种情况。
   *
   * 当在组件中订阅一个可观察对象时，我们通常总是要在组件销毁时取消这个订阅。
   * 但是也有少数例外情况不需要取消订阅。
   * ActivateRoute中的各种可观察对象就是属于这种情况。
   * ActivateRoute及其可观察对象都是由Router本身负责管理的。
   * Router会在不再需要时销毁这个路由组件，而注入进去的ActivateRoute也随之销毁了。
   * 不过，我们仍然可以随意取消订阅，这不会造成任何损害，而且也不是一项坏的实践。
   *
   * Snapshot（快照）：当不需要Observable时的替代品
   * 本应用不需要复用HeroDetailComponent。
   * 我们总会先返回英雄列表，再选择另一位英雄。
   * 所以，不存在从一个英雄详情导航到另一个而不用经过英雄列表的情况。
   * 这意味着我们每次都会得到一个全新的HeroDetailComponent实例。
   *
   * 假如我们很确定这个HeroDetailComponent组件的实例永远、永远不会被复用，那就可以使用快照来简化这段代码。
   *
   * route.snapshot提供了路由参数的初始值。
   * 我们可以通过它来直接访问参数，而不用订阅或者添加Observable的操作符。
   * 这样在读写时就会更简单：
   * let id = this.route.snapshot.paramMap.get('id');
   * this.hero$ = this.service.getHero(id);
   *
   * 记住：，用这种技巧，我们只得到了这些参数的初始值。
   * 如果有可能连续多次导航到此组件，那么就该用params可观察对象的方式。
   * 我们在这里选择使用params可观察对象策略，以防万一。
   */
  ngOnInit() {
    this.hero$ = this.route.paramMap.switchMap((params: ParamMap) => this.service.getHero(params.get('id')));
  }

  /**
   * 该数组缺少一个路由参数，这是因为我们那时没有理由往HeroListComponent发送信息。
   *
   * 但现在有了。我们要在导航请求中同时发送当前英雄的id，以便HeroListComponent可以在列表中高亮这个英雄。
   * 这是一个有更好，没有也无所谓的特性，就算没有它，列表照样能显示得很完美。
   *
   * 我们传送一个包含可选id参数的对象。
   * 为了演示，我们还在对象中定义了一个没用的额外参数（foo），HeroListComponent应该忽略它。
   *
   * 注意浏览器的地址栏。
   * 它应该是这样的，不过也取决于你在哪里运行它：
   * localhost:4200/heroes;id=15;foo=foo
   *
   * id的值像这样出现在URL中（;id=15;foo=foo），但不在URL的路径部分。
   * “Heroes”路由的路径部分并没有定义:id。
   *
   * 可选的路由参数没有使用“？”和“&”符号分隔，因为它们将用在URL查询字符串中。
   * 它们是用“;”分隔的。 这是矩阵URL标记法 —— 我们以前可能从未见过。
   *
   * Matrix URL写法首次提出是在1996提案中，提出者是Web的奠基人：Tim Berners-Lee。
   * 虽然Matrix写法未曾进入过HTML标准，但它是合法的。
   * 而且在浏览器的路由系统中，它作为从父路由和子路由中单独隔离出参数的方式而广受欢迎。
   * Angular的路由器正是这样一个路由系统，并支持跨浏览器的Matrix写法。
   *
   * 这种语法对我们来说可能有点奇怪，不过用户不会在意这一点，因为该URL可以正常的通过邮件发出去或粘贴到浏览器的地址栏中。
   *
   * @param {Hero} hero
   */
  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }
}
