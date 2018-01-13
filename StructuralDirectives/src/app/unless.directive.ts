import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

/**
 * 除非条件为真，否则将模板内容添加到DOM。
 * 如果分配给“appUnless”的表达式计算为真值，那么将模板元素从DOM中移除，将模板元素（重新）插入到DOM中。
 */
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private hasView = true;

  /**
   * 构造函数
   *
   * @param {TemplateRef} templateRef
   * @param {ViewContainerRef} viewContainer
   */
  constructor(private templateRef: TemplateRef, private viewContainer: ViewContainerRef) {
  }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      // 创建一个嵌入式视图
      this.viewContainer.createEmbeddedView(this.templateRef);
      // 已经有视图了
      this.hasView = true;
    } else if (condition && this.hasView) {
      // 清理容器里的视图
      this.viewContainer.clear();
      // 没有视图
      this.hasView = false;
    }
  }

}
