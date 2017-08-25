import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('用户组件已经被销毁ngOnDestroy！！！');
  }

}
