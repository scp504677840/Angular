import {Component} from '@angular/core';

/**
 * 浏览器具有我们熟悉的导航模式：
 * #1 在地址栏输入URL，浏览器就会导航到相应的页面。
 * #2 在页面中点击链接，浏览器就会导航到一个新页面。
 * #3 点击浏览器的前进和后退按钮，浏览器就会在你的浏览历史中向前或向后导航。
 *
 * Angular的Router（即“路由器”）借鉴了这个模型。
 * 它把浏览器中的URL看做一个操作指南， 据此导航到一个由客户端生成的视图，
 * 并可以把参数传给支撑视图的相应组件，帮它决定具体该展现哪些内容。
 * 我们可以为页面中的链接绑定一个路由，这样，当用户点击链接时，就会导航到应用中相应的视图。
 * 当用户点击按钮、从下拉框中选取，或响应来自任何地方的事件时，我们也可以在代码控制下进行导航。
 * 路由器还在浏览器的历史日志中记录下这些活动，这样浏览器的前进和后退按钮也能照常工作。
 *
 * 路由器状态
 * 在导航时的每个生命周期成功完成时，
 * 路由器会构建出一个ActivatedRoute组成的树，它表示路由器的当前状态。
 * 我们可以在应用中的任何地方用Router服务及其routerState属性来访问当前的RouterState值。
 * 路由器状态为我们提供了从任意激活路由开始向上或向下遍历路由树的一种方式，以获得关于父、子、兄弟路由的信息。
 *
 * 激活的路由
 * 该路由的路径和参数可以通过注入进来的一个名叫ActivatedRoute的路由服务来获取。
 * 它有一大堆有用的信息，包括：
 * Property 属性	Description 描述
 *
 * url
 * 路由路径的Observable对象，是一个由路由路径中的各个部分组成的字符串数组。
 *
 * data
 * 一个Observable，其中包含提供给路由的data对象。也包含由解析守卫（resolve guard）解析而来的值。
 *
 * paramMap
 * 一个Observable，其中包含一个由当前路由的必要参数和可选参数组成的map对象。用这个map可以获取来自同名参数的单一值或多重值。
 *
 * queryParamMap
 * 一个Observable，其中包含一个对所有路由都有效的查询参数组成的map对象。 用这个map可以获取来自查询参数的单一值或多重值。
 *
 * fragment
 * 所有路由可用的URL片段的可视化。
 *
 * outlet
 * 要把该路由渲染到的RouterOutlet的名字。对于无名路由，它的路由名是primary，而不是空串。
 *
 * routeConfig
 * 用于该路由的路由配置信息，其中包含原始路径。
 *
 * parent
 * 当该路由是一个子路由时，表示该路由的父级ActivatedRoute。
 *
 * firstChild
 * 包含该路由的子路由列表中的第一个ActivatedRoute。
 *
 * children
 * 包含当前路由下所有已激活的子路由。
 *
 * 有两个旧式属性仍然是有效的，但它们不如其替代品那样强力，我们建议你不要再用它们，并且将在未来的 Angular 版本中废弃。
 * params —— 一个Observable对象，其中包含当前路由的必要参数和可选参数。请改用paramMap。
 * queryParams —— 一个Observable对象，其中包含对所有路由都有效的查询参数。请改用queryParamMap。
 *
 * 路由事件
 * 在每次导航中，Router都会通过Router.events属性发布一些导航事件。
 * 这些事件的范围涵盖了从开始导航到结束导航之间的很多时间点。
 * 下表中列出了全部导航事件：
 * Router Event 路由器事件	Description 描述
 * NavigationStart
 * 本事件会在导航开始时触发。
 *
 * RoutesRecognized
 * 本事件会在路由器解析完URL，并识别出了相应的路由时触发
 *
 * RouteConfigLoadStart
 * 本事件会在Router对一个路由配置进行惰性加载之前触发。
 *
 * RouteConfigLoadEnd
 * 本事件会在路由被惰性加载之后触发。
 *
 * NavigationEnd
 * 本事件会在导航成功结束之后触发。
 *
 * NavigationCancel
 * 本事件会在导航被取消之后触发。 这可能是因为在导航期间某个路由守卫返回了false。
 *
 * NavigationError
 * 这个事件会在导航由于意料之外的错误而失败时触发。
 *
 * 当打开了enableTracing选项时，这些事件也同时会记录到控制台中。
 * 由于这些事件是以Observable的形式提供的，
 * 所以我们可以对自己感兴趣的事件进行filter()，并subscribe()它们，以便根据导航过程中的事件顺序做出决策。
 *
 * 总结一下
 * 该应用有一个配置过的路由器。
 * 外壳组件中有一个RouterOutlet，它能显示路由器所生成的视图。
 * 它还有一些RouterLink，用户可以点击它们，来通过路由器进行导航。
 *
 * 下面是一些路由器中的关键词汇及其含义：
 * 路由器部件   含义
 * Router（路由器）
 * 为激活的URL显示应用组件。管理从一个组件到另一个组件的导航
 *
 * RouterModule（路由器模块）
 * 一个独立的Angular模块，用于提供所需的服务提供商，以及用来在应用视图之间进行导航的指令。
 *
 * Routes（路由数组）
 * 定义了一个路由数组，每一个都会把一个URL路径映射到一个组件。
 *
 * Route（路由）
 * 定义路由器该如何根据URL模式（pattern）来导航到组件。大多数路由都由路径和组件类构成。
 *
 * RouterOutlet（路由出口）
 * 该指令（<router-outlet>）用来标记出路由器该在哪里显示视图。
 *
 * RouterLink（路由链接）
 * 该指令用来把一个可点击的HTML元素绑定到路由。 点击带有绑定到字符串或链接参数数组的routerLink指令的元素就会触发一次导航。
 *
 * RouterLinkActive（活动路由链接）
 * 当HTML元素上或元素内的routerLink变为激活或非激活状态时，该指令为这个HTML元素添加或移除CSS类。
 *
 * ActivatedRoute（激活的路由）
 * 为每个路由组件提供提供的一个服务，它包含特定于路由的信息，比如路由参数、静态数据、解析数据、全局查询参数和全局碎片（fragment）。
 *
 * RouterState（路由器状态）
 * 路由器的当前状态包含了一棵由程序中激活的路由构成的树。它包含一些用于遍历路由树的快捷方法。
 *
 * 链接参数数组
 * 这个数组会被路由器解释成一个路由操作指南。我们可以把一个RouterLink绑定到该数组，或者把它作为参数传给Router.navigate方法。
 *
 * 路由组件
 * 一个带有RouterOutlet的Angular组件，它根据路由器的导航来显示相应的视图。
 *
 * 设置<base href>
 * 路由器使用浏览器的history.pushState进行导航。
 * 感谢pushState！有了它，我们就能按所期望的样子来显示应用内部的URL路径，
 * 比如：localhost:3000/crisis-center。
 * 虽然我们使用的全部是客户端合成的视图，
 * 但应用内部的这些URL看起来和来自服务器的没有什么不同。
 *
 * 现代HTML 5浏览器是最早支持pushState的，这也就是很多人喜欢把这种URL称作“HTML 5风格的”URL的原因。
 * HTML 5风格的导航是路由器的默认值。
 * 请到下面的附录浏览器URL风格中学习为什么首选“HTML 5”风格、如何调整它的行为，以及如何在必要时切换回老式的hash（#）风格。
 *
 * 我们必须往本应用的index.html中添加一个<base href> 元素，这样pushState才能正常工作。
 * 当引用CSS文件、脚本和图片时，浏览器会用<base href>的值作为相对URL的前缀。
 *
 * 把<base>元素添加到<head>元素中。
 * 如果app目录是应用的根目录，对于本应用，可以像这样设置index.html中的href值：
 * <base href="/">
 *
 * 像Plunker这样的在线编程环境会动态设置应用的基地址（base href），因此我们没办法指定固定的地址。
 * 这就是为什么我们要用一个脚本动态写入<base>标签，而不是直接写<base href...>。
 * <script>document.write('<base href="' + document.location + '" />');</script>
 * 我们只应该在在线例子这种情况下使用这种小花招，不要把它用到产品的正式代码中。
 *
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
