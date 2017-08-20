import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  public imgUrl = 'http://placehold.it/400x220';

  constructor() {
  }

  ngOnInit() {
  }

  doOnInput(event: any) {
    // 获取DOM属性
    console.log(event.target.value);
    // 获取HTML属性
    console.log(event.target.getAttribute('value'));
  }

  doOnClick(event: any) {
    console.log(event);
  }

}
