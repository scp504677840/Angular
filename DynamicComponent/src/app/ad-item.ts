import {Type} from '@angular/core/core';

export class AdItem {
  /**
   * 广告项
   * @param {Type<any>} component 组件
   * @param data 数据
   */
  constructor(public component: Type<any>, public data: any) {
  }
}
