import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-controls',
  templateUrl: './hero-controls.component.html',
  styleUrls: ['./hero-controls.component.css']
})
export class HeroControlsComponent implements OnInit {

  @Input() hero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

  activate() {
    this.hero.active = !this.hero.active;
  }

}
