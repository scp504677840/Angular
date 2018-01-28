import {Component, OnInit} from '@angular/core';

/**
 * 子路由
 *
 * CrisisCenterComponent和AppComponent有下列共同点：
 * #1 它是危机中心特性区的根，正如AppComponent是整个应用的根。
 * #2 它是危机管理特性区的壳，正如AppComponent是管理高层工作流的壳。
 *
 * 就像大多数的壳一样，CrisisCenterComponent类也非常简单，
 * 甚至比AppComponent更简单： 它没有业务逻辑，它的模板中没有链接，
 * 只有一个标题和用于放置危机中心的子视图的<router-outlet>。
 *
 * 与AppComponent和大多数其它组件不同的是，它甚至都没有指定选择器selector。
 * 它不需要选择器，因为我们不会把这个组件嵌入到某个父模板中，而是使用路由器导航到它。
 */
@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.css']
})
export class CrisisCenterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
