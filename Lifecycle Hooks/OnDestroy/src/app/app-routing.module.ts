import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChildComponent} from './child/child.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  /*{path: '', redirectTo: '/home', pathMatch: 'full'},*/
  {path: '', redirectTo: '/child', pathMatch: 'full'},
  {path: 'child', component: ChildComponent},
  {path: 'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
