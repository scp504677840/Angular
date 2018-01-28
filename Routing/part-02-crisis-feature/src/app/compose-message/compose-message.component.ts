import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {slideInDownAnimation} from '../animations';

/**
 * 它看起来几乎和我们以前看到的其它组件一样，但有两个值得注意的区别。
 *
 * 主要send()方法在发送消息和关闭弹出框之前通过等待模拟了一秒钟的延迟。
 *
 * closePopup()方法用把popup出口导航到null的方式关闭了弹出框。 这个奇怪的用法在稍后的部分有讲解。
 *
 * 像其它组件一样，我们还要把ComposeMessageComponent添加到AppModule的declarations中。
 */
@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css'],
  animations: [slideInDownAnimation]
})
export class ComposeMessageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  details: string;

  sending = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // 给指定插座提供一个“null”值将清除指定插座的内容
    this.router.navigate([{outlets: {popup: null}}]);
  }
}
