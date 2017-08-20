import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bind-css',
  templateUrl: './bind-css.component.html',
  styleUrls: ['./bind-css.component.css']
})
export class BindCSSComponent implements OnInit {

  // CSS类绑定
  divClass: string;

  // 局部CSS类绑定
  isShow: boolean;

  // ngClass绑定
  divngClass = {one: true, two: false, three: false};

  // 样式绑定
  isDev = true;

  // ngStyle绑定
  divngStyle = {color: 'red', backgroundColor: 'white'};

  constructor() {
    setTimeout(() => {
      this.divClass = 'two';
      this.isShow = true;
      this.divngClass = {one: false, two: true, three: false};
      this.isDev = false;
      this.divngStyle = {color: 'white', backgroundColor: 'red'};
    }, 3000);
  }

  ngOnInit() {
  }

}
