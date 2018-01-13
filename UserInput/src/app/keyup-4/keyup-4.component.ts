import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-keyup-4',
  templateUrl: './keyup-4.component.html',
  styleUrls: ['./keyup-4.component.css']
})
export class Keyup4Component implements OnInit {

  value = '';

  constructor() {
  }

  ngOnInit() {
  }

  update(value: string) {
    this.value = value;
  }

}
