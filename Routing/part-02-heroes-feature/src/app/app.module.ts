import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HeroesModule} from './heroes/heroes/heroes.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  /**
   * 导入模块的顺序很重要
   * 看看该模块的imports数组。
   * 注意，AppRoutingModule是最后一个。
   * 最重要的是，它位于HeroesModule之后。
   *
   * 路由配置的顺序很重要。 路由器会接受第一个匹配上导航所要求的路径的那个路由。
   * 当所有路由都在同一个AppRoutingModule时，我们要把默认路由和通配符路由放在最后（这里是在/heroes路由后面），
   * 这样路由器才有机会匹配到/heroes路由，否则它就会先遇到并匹配上该通配符路由，并导航到“页面未找到”路由。
   *
   * 这些路由不再位于单一文件中。他们分布在两个不同的模块中：AppRoutingModule和HeroesRoutingModule。
   *
   * 每个路由模块都会根据导入的顺序把自己的路由配置追加进去。
   * 如果我们先列出了AppRoutingModule，那么通配符路由就会被注册在“英雄管理”路由之前。
   * 通配符路由（它匹配任意URL）将会拦截住每一个到“英雄管理”路由的导航，因此事实上屏蔽了所有“英雄管理”路由。
   *
   * 反转路由模块的导入顺序，我们就会看到当点击英雄相关的链接时被导向了“页面未找到”路由。
   * 要学习如何在运行时查看路由器配置，参见稍后的内容。
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
