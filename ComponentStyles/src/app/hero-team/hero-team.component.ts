import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-team',
  templateUrl: './hero-team.component.html',
  // styleUrls: ['../../assets/hero-team.component.css']
})
export class HeroTeamComponent implements OnInit {

  @Input() hero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}
