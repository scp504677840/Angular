import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-keyup-2',
  templateUrl: './keyup-2.component.html',
  styleUrls: ['./keyup-2.component.css']
})
export class Keyup2Component implements OnInit {

  values = '';

  constructor() {
  }

  ngOnInit() {
  }

  onKey(value: string) {
    this.values += value + ' | ';
  }

}
