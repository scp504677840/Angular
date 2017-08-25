import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '我是标题';

  divContent = '<div><h1>自定义</h1></div>';

  constructor() {
  }

  ngOnInit(): void {
  }

}
