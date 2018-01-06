import {LoggerService} from '../logger.service';
import {OnInit} from '@angular/core';

let nextId = 1;

export class PeekABoo implements OnInit {

  constructor(private logger: LoggerService) {
    nextId = 1;
  }

  ngOnInit(): void {
    this.logIt(`OnInit PeekABoo`);
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }

}
