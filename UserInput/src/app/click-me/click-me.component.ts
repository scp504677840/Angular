import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

  clickMessage = '';

  constructor() {
  }

  ngOnInit() {
  }

  onClickMe() {
    this.clickMessage = '点击事件触发后生效';
  }

}
