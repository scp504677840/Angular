import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from '../hero-list/hero-list.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  {path: 'heroes', component: HeroListComponent},
  /**
   * 注意路径中的:id令牌。
   * 它为路由参数在路径中创建一个“空位”。
   * 在这里，我们期待路由器把英雄的id插入到那个“空位”中。
   *
   * 如果要告诉路由器导航到详情组件，并让它显示“Magneta”，
   * 我们会期望这个英雄的id像这样显示在浏览器的URL中：
   * localhost:4200/hero/15
   * 如果用户把此URL输入到浏览器的地址栏中，路由器就会识别出这种模式，同样进入“Magneta”的详情视图。
   *
   * 在这个场景下，把路由参数的令牌:id嵌入到路由定义的path中是一个好主意，
   * 因为对于HeroDetailComponent来说id是必须的，
   * 而且路径中的值15已经足够把到“Magneta”的路由和到其它英雄的路由明确区分开。
   *
   * 在列表视图中设置路由参数
   *
   * 我们将导航到HeroDetailComponent组件。
   * 在那里，我们期望看到所选英雄的详情，这需要两部分信息：导航目标和该英雄的id。
   * 因此，这个链接参数数组中有两个条目：目标路由的path（路径），和一个用来指定所选英雄id的路由参数。
   * ['/hero', hero.id] // { 15 }
   * 路由器从该数组中组合出了目标URL： localhost:3000/hero/15。
   *
   * 目标组件HeroDetailComponent该怎么知道这个id参数呢？ 当然不会是自己去分析URL了！那是路由器的工作。
   * 路由器从URL中解析出路由参数（id:15），并通过ActivatedRoute服务来把它提供给HeroDetailComponent组件。
   */
  {path: 'hero/:id', component: HeroDetailComponent},
];

/**
 * 英雄特性区的路由配置
 * 把路由模块文件和它对应的模块文件放在同一个目录下。
 * 比如这里的heroes-routing.module.ts和heroes.module.ts都位于src/app/heroes目录下。
 *
 * 将路由模块文件放到它相关的模块文件所在目录里。
 * 这里，heroes-routing.module.ts和heroes.module.ts都在app/heroes目录中。
 *
 * 从新位置src/app/heroes/目录中导入英雄相关的组件，定义两个“英雄管理”路由，并导出HeroRoutingModule类。
 *
 * 现在，我们有了Heroes模块的路由，还得在RouterModule中把它们注册给路由器，和AppRoutingModule中的做法几乎完全一样。
 *
 * 这里有少量但是关键的不同点。
 * 在AppRoutingModule中，我们使用了静态的RouterModule.forRoot方法来注册我们的路由和全应用级服务提供商。
 * 在特性模块中，我们要改用forChild静态方法。
 *
 * 只在根模块AppRoutingModule中调用RouterModule.forRoot（如果在AppModule中注册应用的顶级路由，那就在AppModule中调用）。
 * 在其它模块中，我们就必须调用RouterModule.forChild方法来注册附属路由。
 */
@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
}
