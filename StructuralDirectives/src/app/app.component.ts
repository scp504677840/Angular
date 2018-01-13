import {Component} from '@angular/core';
import {HEROES} from './heros';

/**
 * 结构型指令
 *
 * 什么是结构型指令？
 * 结构型指令的职责是HTML布局。他们塑造或重构DOM的结构，比如添加、移除或维护这些元素。
 * 像其它指令一样，你可以把结构型指令应用到一个宿主元素上。 然后它就可以对宿主元素及其子元素做点什么。
 * 结构型指令非常容易识别。 在这个例子中，星号（*）被放在指令的属性名之前。
 *
 * 没有方括号，没有圆括号，只是把*ngIf设置为一个字符串。
 * 在这个例子中，我们将学到星号(*)这个简写方法，而这个字符串是一个微语法，而不是通常的模板表达式。
 * Angular会解开这个语法糖，变成一个<ng-template>标记，包裹着宿主元素及其子元素。
 * 每个结构型指令都可以用这个模板做点不同的事情。
 *
 * 指令的拼写形式
 * 在本章中，我们将看到指令同时具有两种拼写形式大驼峰UpperCamelCase和小驼峰lowerCamelCase，
 * 比如我们已经看过的NgIf和ngIf。
 * 这里的原因在于，NgIf引用的是指令的类名，而ngIf引用的是指令的属性名*。
 *
 * 指令的类名拼写成大驼峰形式（NgIf），而它的属性名则拼写成小驼峰形式（ngIf）。
 * 本章会在谈论指令的属性和工作原理时引用指令的类名，在描述如何在HTML模板中把该指令应用到元素时，引用指令的属性名。
 *
 * 还有另外两种Angular指令，在本开发指南的其它地方有讲解：(1) 组件 (2) 属性型指令。
 * 组件可以在原生HTML元素中管理一小片区域的HTML。从技术角度说，它就是一个带模板的指令。
 * 属性型指令会改变某个元素、组件或其它指令的外观或行为。 比如，内置的NgStyle指令可以同时修改元素的多个样式。
 * 我们可以在一个宿主元素上应用多个属性型指令，但只能应用一个结构型指令。
 *
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heroes = HEROES;

  hero = this.heroes[0];

  showSad = true;

  condition = false;

}
