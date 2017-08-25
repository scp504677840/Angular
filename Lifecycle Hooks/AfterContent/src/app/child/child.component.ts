import {Component, OnInit, AfterContentInit, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterContentInit, AfterContentChecked {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('子组件内容投影ngAfterContentInit初始化完毕！');
  }

  ngAfterContentChecked(): void {
    console.log('子组件内容投影ngAfterContentChecked变更检测完毕！');
  }

}
