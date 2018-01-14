import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';

/**
 * 这个组件没有什么特别的地方，没有表单相关的东西，与之前写过的组件没什么不同。
 * 只需要前面章节中学过的概念，就可以完全理解这个组件：
 * #1 这段代码导入了Angular核心库以及我们刚刚创建的Hero模型。
 * #2 @Component选择器“app-hero-form”表示可以用<hero-form>标签把这个表单放进父模板。
 * #3 moduleId: module.id属性设置了基地址，用于从相对模块路径加载templateUrl。
 * #4 templateUrl属性指向一个独立的 HTML 模板文件。
 *
 * 接下来，我们可以注入一个数据服务，以获取或保存真实的数据，
 * 或者把这些属性暴露为输入属性和输出属性（参见Template Syntax中的输入和输出属性）来绑定到一个父组件。
 * 这不是现在需要关心的问题，未来的更改不会影响到这个表单。
 * 我们添加一个diagnostic属性，以返回这个模型的 JSON 形式。在开发过程中，它用于调试，最后清理时会丢弃它。
 *
 * 为何分离模板文件？
 * 为什么不与我们在其他地方常常做的那样，以内联的方式把模板写在组件文件中呢？
 * 没有什么答案在所有场合都总是“正确”的。
 * 当模板足够短的时候，内联形式更招人喜欢。
 * 但大多数的表单模板都不短。
 * 通常，TypeScript 和 JavaScript 文件不是写（读）大型 HTML 的好地方，
 * 而且没有几个编辑器能对混写的 HTML 和代码提供足够的帮助。
 * 我们还是喜欢内容清晰、目标明确的短文件，像这个一样。
 *
 * 就算是在仅仅显示少数表单项目时，表单模板一般都比较庞大。
 * 所以通常最好的方式是将 HTML 模板放到单独的文件中。
 * 一会儿将编写这个模板文件。
 * 在这之前，先退一步，再看看app.module.ts和app.component.ts，让它们使用新的HeroFormComponent。
 * #1 导入FormsModule和新组件HeroFormComponent。
 * #2 把FormsModule添加到ngModule装饰器的imports列表中，这样应用就能访问模板驱动表单的所有特性，包括ngModel。
 * #3 把HeroFormComponent添加到ngModule装饰器的declarations列表中，使HeroFormComponent组件在整个模块中可见。
 *
 * 如果某个组件、指令或管道是属于imports中所导入的某个模块的，
 * 那就不能再把它再声明到本模块的declarations数组中。
 * 如果它是你自己写的，并且确实属于当前模块，才应该把它声明在declarations数组中。
 *
 * 通过 ngModel 跟踪修改状态与有效性验证
 * 在表单中使用ngModel可以获得比仅使用双向数据绑定更多的控制权。
 * 它还会告诉我们很多信息：用户碰过此控件吗？它的值变化了吗？数据变得无效了吗？
 * NgModel 指令不仅仅跟踪状态。
 * 它还使用特定的 Angular CSS 类来更新控件，以反映当前状态。
 * 可以利用这些 CSS 类来修改控件的外观，显示或隐藏消息。
 * 状态 为真时的 CSS 类 为假时的 CSS 类
 * 控件被访问过。ng-touched ng-untouched
 * 控件的值变化了。 ng-dirty ng-pristine
 * 控件的值有效。 ng-valid ng-invalid
 * 往姓名<input>标签上添加名叫 spy 的临时模板引用变量， 然后用这个 spy 来显示它上面的所有 CSS 类。
 */
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['聪明', '敏捷', '力量', '耐力'];

  model = new Hero(18, 'Tom', this.powers[0], '积极向上');

  submitted = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('--- onSubmit ---');
    this.submitted = true;
  }

  /**
   * 我们添加一个diagnostic属性，以返回这个模型的 JSON 形式。
   * 在开发过程中，它用于调试，最后清理时会丢弃它。
   * 待办事项：完成后删除
   *
   * @returns {string}
   */
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(20, '', '', '');
  }

  // 不在DOCS中显示
  // 在html中显示：
  // Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] && form.controls['name'].value;
  }

}
