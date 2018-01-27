import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from './hero-list/hero-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  // 普通路由
  {path: 'crisis-center', component: CrisisListComponent},
  // 参数路由
  {path: 'hero/:id', component: HeroDetailComponent},
  // data数据路由
  {path: 'heroes', component: HeroListComponent, data: {title: 'Heroes List'}},
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

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
