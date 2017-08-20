import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  stockCode: string;

  @Input()
  amount: number;

  constructor() {
    // 这里每隔3秒就重置一次stockCode的值，是想说明子组件stockCode的改变不会影响到父组件的stockCode值。
    setInterval(() => {
      this.stockCode = 'apple';
    }, 3000);
  }

  ngOnInit() {
  }

}
