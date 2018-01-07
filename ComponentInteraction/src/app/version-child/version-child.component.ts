import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, OnChanges {

  @Input() major: number;

  @Input() minor: number;

  changLog: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  /*ngOnChanges(changes: SimpleChanges): void {
  }*/

  ngOnChanges(changes: { [propKey: string]: SimpleChanges }): void {

    const log: string[] = [];
    for (let propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }

    this.changLog.push(log.join(', '));

  }

}
