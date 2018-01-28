import {animate, AnimationMetadata, state, style, transition, trigger} from '@angular/animations';

/**
 * 组件转换动画
 *
 * 该文件做了如下工作：
 * #1 导入动画符号以构建动画触发器、控制状态并管理状态之间的过渡。
 * #2 导出了一个名叫slideInDownAnimation的常量，并把它设置为一个名叫*routeAnimation的动画触发器。带动画的组件将会引用这个名字。
 * #3 指定了一个通配符状态 —— *，它匹配该路由组件存在时的任何动画状态。
 * #4 定义两个过渡效果，其中一个（:enter）在组件进入应用视图时让它从屏幕左侧缓动进入（ease-in），
 *    另一个（:leave）在组件离开应用视图时让它向下飞出。
 *
 * 我们可以为其它路由组件用不同的转场效果创建更多触发器。现在这个触发器已经足够当前的里程碑用了。
 *
 * @type {AnimationTriggerMetadata}
 */
export const slideInDownAnimation: AnimationMetadata = trigger('routeAnimation', [
  state('*', style({opacity: 1, transform: 'translateX(0)'})),
  transition(':enter', [
    style({opacity: 0, transform: 'translateX(-100%)'}),
    animate('0.2s ease-in')
  ]),
  transition(':leave', [
    animate('0.5s ease-out', style({opacity: 0, transform: 'translateY(100%)'}))
  ]),
]);
