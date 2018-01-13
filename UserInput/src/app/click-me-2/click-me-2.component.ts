import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-click-me-2',
  templateUrl: './click-me-2.component.html',
  styleUrls: ['./click-me-2.component.css']
})
export class ClickMe2Component implements OnInit {

  clickMessage = '';

  clicks = 1;

  constructor() {
  }

  ngOnInit() {
  }

  onClickMe2(event: any) {
    console.log('--- onClickMe2 ---');
    let evtMsg = event ? ' Event target is ' + event.target.tagName : '';
    this.clickMessage = `Click #${this.clicks++}. ${evtMsg}`;
  }

}
