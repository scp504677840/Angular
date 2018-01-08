import {Directive, ViewContainerRef} from '@angular/core';

/**
 * 广告条辅助指令，在模版中标记出有效当插入点。
 */
@Directive({
  selector: '[appAd]'
})
export class AdDirective {

  /**
   * ViewContainerRef来获取对容器视图的访问权，这个容器就是那些动态加入的组件的宿主。
   *
   * @param {ViewContainerRef} viewContainerRef
   */
  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
