import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-after-view-parent',
  templateUrl: './after-view-parent.component.html',
  styleUrls: ['./after-view-parent.component.css'],
  providers: [LoggerService]
})
export class AfterViewParentComponent implements OnInit {

  logs: string[] = [];

  show = true;

  constructor(private logger: LoggerService) {
    this.logs = logger.logs;
  }

  ngOnInit() {
  }

  reset() {
    this.logs.length = 0;
    // 快速删除并重新加载AfterViewComponent重新创建它
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }

}
