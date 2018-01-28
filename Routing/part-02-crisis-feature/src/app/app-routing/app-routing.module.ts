import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrisisListComponent} from '../crisis-center/crisis-list/crisis-list.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {ComposeMessageComponent} from '../compose-message/compose-message.component';

const appRoutes: Routes = [
  /**
   * 对path和component属性应该很熟悉了吧。
   * 注意这个新的属性outlet被设置成了'popup'。
   * 这个路由现在指向了popup出口，而ComposeMessageComponent也将显示在那里。
   *
   * 用户需要某种途径来打开这个弹出框。
   * 打开AppComponent，并添加一个“Contact”链接。
   * <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
   */
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  /**
   * 默认路由
   * 该路由使用了重定向路由
   * 首选方案是添加一个redirect路由来把最初的相对路径（''）转换成期望的默认路径（/heroes）。
   * 浏览器地址栏会显示.../heroes，就像你直接导航到那里一样。
   *
   * 在通配符路由上方添加一个默认路由。 在下方的代码片段中，它出现在通配符路由的紧上方，展示了这个里程碑的完整appRoutes。
   *
   * 重定向路由需要一个pathMatch属性，来告诉路由器如何用URL去匹配路由的路径，否则路由器就会报错。
   * 在本应用中，路由器应该只有在完整的URL等于''时才选择HeroListComponent组件，因此我们要把pathMatch设置为'full'。
   *
   * 从技术角度说，pathMatch = 'full'导致URL中剩下的、未匹配的部分必须等于''。
   * 在这个例子中，跳转路由在一个顶级路由中，因此剩下的URL和完整的URL是一样的。
   *
   * pathMatch的另一个可能的值是'prefix'，
   * 它会告诉路由器：当剩下的URL以这个跳转路由中的prefix值开头时，就会匹配上这个跳转路由。
   *
   * 在这里不能这么做！如果pathMatch的值是'prefix'，那么每个URL都会匹配上''。
   *
   * 尝试把它设置为'prefix'，然后点击Go to sidekicks按钮。
   * 别忘了，它是一个无效URL，本应显示“Page not found”页。
   * 但是，我们看到了“英雄列表”页。
   * 在地址栏中输入一个无效的URL，我们又被路由到了/heroes。
   * 每一个URL，无论有效与否，都会匹配上这个路由定义。
   *
   * 默认路由应该只有在整个URL等于''时才重定向到HeroListComponent，别忘了把重定向路由设置为pathMatch = 'full'。
   */
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  /**
   * 通配符路由
   * 我们以前在应用中创建过两个路由，一个是/crisis-center，另一个是/heroes。
   * 所有其它URL都会导致路由器抛出错误，并让应用崩溃。
   *
   * 可以添加一个通配符路由来拦截所有无效的URL，并优雅的处理它们。
   * 通配符路由的path是两个星号（**），它会匹配任何 URL。
   * 当路由器匹配不上以前定义的那些路由时，它就会选择这个路由。
   * 通配符路由可以导航到自定义的“404 Not Found”组件，也可以重定向到一个现有路由。
   *
   * 路由器使用先匹配者优先的策略来选择路由。
   * 通配符路由是路由配置中最没有特定性的那个，因此务必确保它是配置中的最后一个路由。
   */
  {path: '**', component: PageNotFoundComponent}
];

/**
 * 里程碑 #2：路由模块
 *
 * 在原始的路由配置中，我们提供了仅有两个路由的简单配置来设置应用的路由。
 * 对于简单的路由，这没有问题。
 * 随着应用的成长，我们使用更多路由器特征，比如守卫、解析器和子路由等，我们很自然想要重构路由。
 * 建议将路由信息移到一个单独的特殊用途的模块，叫做路由模块。
 *
 * 路由模块有一系列特性：
 * #1 把路由这个关注点从其它应用类关注点中分离出去
 * #2 测试特性模块时，可以替换或移除路由模块
 * #3 为路由服务提供商（包括守卫和解析器等）提供一个共同的地方
 * #4 不要声明组件
 *
 * 你需要路由模块吗？
 * 路由模块在根模块或者特性模块替换了路由配置。在路由模块或者在模块内部配置路由，但不要同时在两处都配置。
 * 路由模块是设计选择，它的价值在配置很复杂，并包含专门守卫和解析器服务时尤其明显。 在配置很简单时，它可能看起来很多余。
 * 在配置很简单时，一些开发者跳过路由模块（例如AppRoutingModule），并将路由配置直接混合在关联模块中（比如AppModule ）。
 * 我们建议你选择其中一种模式，并坚持模式的一致性。
 * 大多数开发者应该采用路由模块，以保持一致性。
 * 它在配置复杂时，能确保代码干净。
 * 它让测试特性模块更加容易。
 * 它的存在让我们一眼就能看出这个模块是带路由的。
 * 开发者可以很自然的从路由模块中查找和扩展路由配置。
 */
@NgModule({
  imports: [
    /**
     * 这里的路由数组appRoutes描述如何进行导航。
     * 把它传给RouterModule.forRoot方法并传给本模块的imports数组就可以配置路由器。
     *
     * 每个Route都会把一个URL的path映射到一个组件。
     * 注意，path不能以斜杠（/）开头。
     * 路由器会为解析和构建最终的URL，这样当我们在应用的多个视图之间导航时，可以任意使用相对路径和绝对路径。
     *
     * 第二个路由中的:id是一个路由参数的令牌(Token)。
     * 比如/hero/42这个URL中，“42”就是id参数的值。
     * 此URL对应的HeroDetailComponent组件将据此查找和展现id为42的英雄。
     * 在本章中稍后的部分，我们将会学习关于路由参数的更多知识。
     *
     * 第三个路由中的data属性用来存放于每个具体路由有关的任意信息。
     * 该数据可以被任何一个激活路由访问，并能用来保存诸如 页标题、面包屑以及其它静态只读数据。
     * 本章稍后的部分，我们将使用resolve守卫来获取动态数据。
     *
     * 第四个路由中的空路径（''）表示应用的默认路径，
     * 当URL为空时就会访问那里，因此它通常会作为起点。
     * 这个默认路由会重定向到URL /heroes，并显示HeroesListComponent。
     *
     * 最后一个路由中的**路径是一个通配符。
     * 当所请求的URL不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由。
     * 这个特性可用于显示“404 - Not Found”页，或自动重定向到其它路由。
     *
     * 这些路由的定义顺序是刻意如此设计的。
     * 路由器使用先匹配者优先的策略来匹配路由，所以，具体路由应该放在通用路由的前面。
     * 在上面的配置中，带静态路径的路由被放在了前面，
     * 后面是空路径路由，因此它会作为默认路由。
     * 而通配符路由被放在最后面，这是因为它能匹配上每一个URL，
     * 因此应该只有在前面找不到其它能匹配的路由时才匹配它。
     *
     * 如果我们想要看到在导航的生命周期中发生过哪些事件，可以使用路由器默认配置中的enableTracing选项。
     * 它会把每个导航生命周期中的事件输出到浏览器的控制台。
     * 这应该只用于调试。
     * 我们只需要把enableTracing: true选项作为第二个参数传给RouterModule.forRoot()方法就可以了。
     */
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
