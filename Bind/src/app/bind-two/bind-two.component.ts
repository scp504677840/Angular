import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bind-two',
  templateUrl: './bind-two.component.html',
  styleUrls: ['./bind-two.component.css']
})
export class BindTwoComponent implements OnInit {

  name: string;

  title: string;

  constructor() {
    setInterval(() => {
      this.name = 'Tom';
    }, 3000);
  }

  ngOnInit() {
  }

  doOnInput(event: any) {
    this.name = event.target.value;
  }

}
