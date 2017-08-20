import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  day: Date = new Date();

  pi = 3.1415926;

  size = 10;

  constructor() {
  }

  ngOnInit() {
  }

}
