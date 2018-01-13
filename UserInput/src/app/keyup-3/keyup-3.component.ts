import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-keyup-3',
  templateUrl: './keyup-3.component.html',
  styleUrls: ['./keyup-3.component.css']
})
export class Keyup3Component implements OnInit {

  value = '';

  constructor() {
  }

  ngOnInit() {
  }

  onEnter(value: string) {
    this.value = value;
  }

}
