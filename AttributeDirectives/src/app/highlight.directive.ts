import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  /**
   * HostListener装饰器引用属性型指令的宿主元素，在这个例子中就是<p>。
   * 当然，你可以通过标准的JavaScript方式手动给宿主 DOM 元素附加一个事件监听器。
   * 但这种方法至少有三个问题：
   * 1.必须正确的书写事件监听器。
   * 2.当指令被销毁的时候，必须拆卸事件监听器，否则会导致内存泄露。
   * 3.必须直接和 DOM API 打交道，应该避免这样做。
   */
  @HostListener('mouseenter') onMouseenter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }

}
