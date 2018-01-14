import { Component } from '@angular/core';

/**
 * 表单
 *
 * 表单是商业应用的支柱，我们用它来执行登录、求助、下单、预订机票、安排会议，以及不计其数的其它数据录入任务。
 * 在开发表单时，创建数据方面的体验是非常重要的，它能指引用户明细、高效的完成工作流程。
 * 开发表单需要设计能力（那超出了本章的范围），
 * 而框架支持双向数据绑定、变更检测、验证和错误处理，而本章我们会接触到它们。
 * 这个页面演示了如何从草稿构建一个简单的表单。这个过程中你将学会如何：
 * #1 用组件和模板构建 Angular 表单
 * #2 用ngModel创建双向数据绑定，以读取和写入输入控件的值
 * #3 跟踪状态的变化，并验证表单控件
 * #4 使用特殊的CSS类来跟踪控件的状态并给出视觉反馈
 * #5 向用户显示验证错误提示，以及启用/禁用表单控件
 * #6 使用模板引用变量在 HTML 元素之间共享信息
 *
 * 模板驱动的表单
 * 通常，使用 Angular 模板语法编写模板，结合本章所描述的表单专用指令和技术来构建表单。
 * 你还可以使用响应式（也叫模型驱动）的方式来构建表单。不过本章中只介绍模板驱动表单。
 * 利用 Angular 模板，可以构建几乎所有表单 — 登录表单、联系人表单…… 以及任何的商务表单。
 * 可以创造性的摆放各种控件、把它们绑定到数据、指定校验规则、显示校验错误、
 * 有条件的禁用或 启用特定的控件、触发内置的视觉反馈等等，不胜枚举。
 * 它用起来很简单，这是因为 Angular 处理了大多数重复、单调的任务，这让我们可以不必亲自操刀、身陷其中。
 * 我们将学习构建如下的“模板驱动”表单：
 *
 * 创建 Hero 模型类
 * 当用户输入表单数据时，需要捕获它们的变化，并更新到模型的实例中。
 * 除非知道模型里有什么，否则无法设计表单的布局。
 *
 * 最简单的模型是个“属性包”，用来存放应用中一件事物的事实。
 * 这里使用三个必备字段 (id、name、power)，
 * 和一个可选字段 (alterEgo，译注：中文含义是第二人格，例如 X 战警中的 Jean / 黑凤凰)。
 *
 * ANGULAR 表单不需要任何样式库
 * Angular 不需要container、form-group、form-control和btn类， 或者外部库的任何样式。
 * Angular 应用可以使用任何 CSS 库…… ，或者啥都不用。
 *
 * 结论
 * 本章讨论的 Angular 表单技术利用了下列框架特性来支持数据修改、验证和更多操作：
 * Angular HTML 表单模板。
 * 带有@Component装饰器的表单组件类。
 * 通过绑定到NgForm.ngSubmit事件属性来处理表单提交。
 * 模板引用变量，例如#heroForm和#name。
 * [(ngModel)]语法用来实现双向数据绑定。
 * name属性的用途是有效性验证和对表单元素的变更进行追踪。
 * 指向 input 控件的引用变量上的valid属性，可用于检查控件是否有效、是否显示/隐藏错误信息。
 * 通过绑定到NgForm的有效性状态，控制Submit按钮的禁用状态。
 * 定制 CSS 类来给用户提供无效控件的视觉反馈。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}