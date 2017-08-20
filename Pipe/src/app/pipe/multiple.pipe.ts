import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  /**
   * 变换
   * @param value 输入值
   * @param args 可选参数
   * @returns {any} 返回新的值
   */
  transform(value: number, args?: number): any {
    if (!args) {
      args = 1;
    }
    return value * args;
  }

}
