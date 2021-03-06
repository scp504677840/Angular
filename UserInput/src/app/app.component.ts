import {Component} from '@angular/core';

/**
 * 当用户点击链接、按下按钮或者输入文字时，这些用户动作都会产生 DOM 事件。
 * 本章解释如何使用 Angular 事件绑定语法把这些事件绑定到事件处理器。
 *
 * 绑定到用户输入事件
 * 你可以使用 Angular 事件绑定机制来响应任何 DOM 事件。
 * 许多 DOM 事件是由用户输入触发的。绑定这些事件可以获取用户输入。
 * 要绑定 DOM 事件，只要把 DOM 事件的名字包裹在圆括号中，然后用放在引号中的模板语句对它赋值就可以了。
 * 下例展示了一个事件绑定，它实现了一个点击事件处理器：
 * <button (click)="onClickMe()">Click me!</button>
 * 等号左边的(click)表示把按钮的点击事件作为绑定目标。
 * 等号右边引号中的文本是模板语句，通过调用组件的onClickMe方法来响应这个点击事件。
 * 写绑定时，需要知道模板语句的执行上下文。
 * 出现在模板语句中的每个标识符都属于特定的上下文对象。
 * 这个对象通常都是控制此模板的 Angular 组件。
 * 上例中只显示了一行 HTML，那段 HTML 片段属于下面这个组件。
 *
 * 通过 $event 对象取得用户输入
 * DOM 事件可以携带可能对组件有用的信息。
 * 本节将展示如何绑定输入框的keyup事件，在每个敲击键盘时获取用户输入。
 * 下面的代码监听keyup事件，并将整个事件载荷 ($event) 传递给组件的事件处理器。
 *
 * <input (keyup)="onKey($event)">
 * <p>{{values}}</p>
 *
 * 当用户按下并释放一个按键时，触发keyup事件，
 * Angular 在$event变量提供一个相应的 DOM 事件对象，
 * 上面的代码将它作为参数传递给onKey()方法。
 *
 * $event的类型
 * 上例将$event转换为any类型。
 * 这样简化了代码，但是有成本。
 * 没有任何类型信息能够揭示事件对象的属性，防止简单的错误。
 * $event的类型现在是KeyboardEvent。
 * 不是所有的元素都有value属性，所以它将target转换为输入元素。
 * OnKey方法更加清晰的表达了它期望从模板得到什么，以及它是如何解析事件的。
 *
 * 传入 $event 是靠不住的做法
 * 类型化事件对象揭露了重要的一点，
 * 即反对把整个 DOM 事件传到方法中，因为这样组件会知道太多模板的信息。
 * 只有当它知道更多它本不应了解的 HTML 实现细节时，它才能提取信息。
 * 这就违反了模板（用户看到的）和组件（应用如何处理用户数据）之间的分离关注原则。
 * 下面将介绍如何用模板引用变量来解决这个问题。
 *
 * 从一个模板引用变量中获得用户输入
 * 还有另一种获取用户数据的方式：使用 Angular 的模板引用变量。
 * 这些变量提供了从模块中直接访问元素的能力。
 * 在标识符前加上井号 (#) 就能声明一个模板引用变量。
 * 这个模板引用变量名叫box，在<input>元素声明，它引用<input>元素本身。
 * 代码使用box获得输入元素的value值，并通过插值表达式把它显示在<p>标签中。
 * 这个模板完全是完全自包含的。它没有绑定到组件，组件也没做任何事情。
 *
 * 除非你绑定一个事件，否则这将完全无法工作。
 * 只有在应用做了些异步事件（如击键），Angular 才更新绑定（并最终影响到屏幕）。
 * 本例代码将keyup事件绑定到了数字0，这可能是最短的模板语句。
 * 虽然这个语句不做什么，但它满足 Angular 的要求，所以 Angular 将更新屏幕。
 *
 * 从模板变量获得输入框比通过$event对象更加简单。
 * 下面的代码重写了之前keyup示例，它使用变量来获得用户输入。
 * 这个方法最漂亮的一点是：组件代码从视图中获得了干净的数据值。再也不用了解$event变量及其结构了。
 *
 * 按键事件过滤（通过key.enter）
 * (keyup)事件处理器监听每一次按键。
 * 有时只在意回车键，因为它标志着用户结束输入。
 * 解决这个问题的一种方法是检查每个$event.keyCode，只有键值是回车键时才采取行动。
 * 更简单的方法是：绑定到 Angular 的keyup.enter 模拟事件。
 * 然后，只有当用户敲回车键时，Angular 才会调用事件处理器。
 *
 * 失去焦点事件 (blur)
 * 前上例中，如果用户没有先按回车键，而是移开了鼠标，点击了页面中其它地方，输入框的当前值就会丢失。
 * 只有当用户按下了回车键候，组件的values属性才能更新。
 * 下面通过同时监听输入框的回车键和失去焦点事件来修正这个问题。
 *
 * 小结
 * #1
 * 使用模板变量来引用元素 — newHero模板变量引用了<input>元素。
 * 你可以在<input>的任何兄弟或子级元素中引用newHero。
 * #2
 * 传递数值，而非元素 — 获取输入框的值并将它传递给组件的addHero，而不要传递newHero。
 * #3
 * 保持模板语句简单 — (blur)事件被绑定到两个 JavaScript 语句。
 * 第一句调用addHero。第二句newHero.value=''在添加新英雄到列表中后清除输入框。
 *
 * 你已经掌握了响应用户输入和操作的基础技术。
 * 这些技术对小规模演示很实用，但是在处理大量用户输入时，很容易变得累赘和笨拙。
 * 要在数据录入字段和模型属性之间传递数据，双向数据绑定是更加优雅和简洁的方式。
 * 下一章表单解释了如何用NgModel来进行双向绑定。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
