import {Component, HostBinding, OnInit} from '@angular/core';
import {Crisis} from '../crisis';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '../../dialog.service';
import {Observable} from 'rxjs/Observable';
import {slideInDownAnimation} from '../../animations';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
  animations: [slideInDownAnimation],
})
export class CrisisDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  crisis: Crisis;

  editName: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    // 注意：在下一节中我们将使用CrisisDetailResolver来获取数据！！！此时无数据很正常！！！
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // 当危机为空或者危机名称为编辑名称时
    // 如果没有危机或危机不变，允许同步导航（“真”）
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    // 否则，请求用户使用对话服务，并在用户决定时返回其解析为真或假的观察值
    return this.dialogService.confirm('Discard changes?');
  }

  /**
   * 传递危机编号（如果可用），以便CrisisListComponent可以选择危机。
   * 为kick添加一个完全没用的`foo`参数。相对导航返回危机
   *
   * 相对导航
   * 虽然构建出了危机中心特性区，我们却仍在使用以斜杠开头的绝对路径来导航到危机详情的路由。
   * 路由器会从路由配置的顶层来匹配像这样的绝对路径。
   * 我们固然可以继续像危机中心特性区一样使用绝对路径，
   * 但是那样会把链接钉死在特定的父路由结构上。
   * 如果我们修改了父路径/crisis-center，那就不得不修改每一个链接参数数组。
   *
   * 通过改成定义相对于当前URL的路径，我们可以把链接从这种依赖中解放出来。
   * 当我们修改了该特性区的父路由路径时，该特性区内部的导航仍然完好无损。
   *
   * 例子如下：
   * 在链接参数数组中，路由器支持“目录式”语法来指导我们如何查询路由名：
   * ./或无前导斜线形式是相对于当前级别的。
   * ../会回到当前路由路径的上一级。
   * 我们可以把相对导航语法和一个祖先路径组合起来用。
   * 如果不得不导航到一个兄弟路由，我们可以用../<sibling>来回到上一级，然后进入兄弟路由路径中。
   *
   * 用Router.navigate方法导航到相对路径时，我们必须提供当前的ActivatedRoute，
   * 来让路由器知道我们现在位于路由树中的什么位置。
   *
   * 在链接参数数组中，添加一个带有relativeTo属性的对象，并把它设置为当前的ActivatedRoute。
   * 这样路由器就会基于当前激活路由的位置来计算出目标URL。
   *
   * 当调用路由器的navigateByUrl时，总是要指定完整的绝对路径。
   *
   * 如果我们用RouterLink来代替Router服务进行导航，就要使用相同的链接参数数组，
   * 不过不再需要提供relativeTo属性。 ActivatedRoute已经隐含在了RouterLink指令中。
   *
   * 注意这个路径使用了../语法返回上一级。
   * 如果当前危机的id是3，那么最终返回到的路径就是/crisis-center/;id=3;foo=foo。
   */
  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.route});
  }
}
