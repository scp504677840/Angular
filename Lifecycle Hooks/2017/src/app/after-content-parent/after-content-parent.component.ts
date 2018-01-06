import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styleUrls: ['./after-content-parent.component.css'],
  providers: [LoggerService]
})
export class AfterContentParentComponent implements OnInit {

  logs: string[] = [];

  show = true;

  constructor(private afterLogger: LoggerService) {
    this.logs = afterLogger.logs;
  }

  ngOnInit() {
  }

  reset() {
    this.logs.length = 0;
    this.show = false;
    this.afterLogger.tick_then(() => this.show = true);
  }

}
