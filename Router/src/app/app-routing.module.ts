import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ChatComponent} from './chat/chat.component';
import {LoginGuard} from './guard/login.guard';
import {UnsaveGuard} from './guard/unsave.guard';
import {ProductResolve} from './guard/product.resolve';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // 查询参数形式
  // {path: 'product', component: ProductComponent},

  // 路径传参形式
  // {path: 'product/:id', component: ProductComponent},

  // 演示子路由
  /*{
    path: 'product/:id',
    component: ProductComponent,
    children: [{path: '', component: ProductDescComponent}, {path: 'seller/:id', component: SellerInfoComponent}]
  },*/

  // 演示路由守卫 canActivate、canDeactivate
  /*{
    path: 'product/:id',
    component: ProductComponent,
    children: [{path: '', component: ProductDescComponent}, {path: 'seller/:id', component: SellerInfoComponent}],
    canActivate: [LoginGuard],
    canDeactivate: [UnsaveGuard],
  },*/

  // 演示路由守卫 resolve
  {
    path: 'product/:id',
    component: ProductComponent,
    children: [{path: '', component: ProductDescComponent}, {path: 'seller/:id', component: SellerInfoComponent}],
    resolve: {product: ProductResolve},
  },

  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {path: '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsaveGuard, ProductResolve]
})
export class AppRoutingModule {
}
