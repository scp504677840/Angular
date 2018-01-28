import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrisisCenterComponent} from '../crisis-center/crisis-center.component';
import {CrisisDetailComponent} from '../crisis-detail/crisis-detail.component';
import {CrisisListComponent} from '../crisis-list/crisis-list.component';
import {CrisisCenterHomeComponent} from '../crisis-center-home/crisis-center-home.component';

/**
 * 注意，父路由crisis-center有一个children属性，它有一个包含CrisisListComponent的路由。
 * CrisisListModule路由还有一个带两个路由的children数组。
 *
 * 这两个路由导航到了危机中心的两个子组件：CrisisCenterHomeComponent和CrisisDetailComponent。
 *
 * 对这些路由的处理中有一些重要的不同。
 *
 * 路由器会把这些路由对应的组件放在CrisisCenterComponent的RouterOutlet中，而不是AppComponent壳组件中的。
 *
 * CrisisListComponent包含危机列表和一个RouterOutlet，用以显示Crisis Center Home和Crisis Detail这两个路由组件。
 *
 * Crisis Detail路由是Crisis List的子路由。
 * 由于路由器默认会复用组件，因此当我们选择了另一个危机时，CrisisDetailComponent会被复用。
 *
 * 作为对比，回到Hero Detail路由时，每当我们选择了不同的英雄时，该组件都会被重新创建。
 *
 * 在顶级，以/开头的路径指向的总是应用的根。
 * 但这里是子路由。 它们是在父路由路径的基础上做出的扩展。
 * 在路由树中每深入一步，我们就会在该路由的路径上添加一个斜线/（除非该路由的路径是空的）。
 *
 * 如果把该逻辑应用到危机中心中的导航，那么父路径就是/crisis-center。
 * #1 要导航到CrisisCenterHomeComponent，完整的URL是/crisis-center (/crisis-center + '' + '')。
 * #2 要导航到CrisisDetailComponent以展示id=2的危机，完整的URL是/crisis-center/2 (/crisis-center + '' + '/2')。
 *
 * @type {{path: string; component: CrisisCenterComponent; children: {path: string; component: CrisisListComponent; children: ({path: string; component: CrisisDetailComponent} | {path: string; component: CrisisCenterHomeComponent})[]}[]}[]}
 */
const crisisRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
          },
          {
            path: '',
            component: CrisisCenterHomeComponent,
          }
        ],
      }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisRoutes)
  ],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule {
}
