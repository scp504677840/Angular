import {Component, Input, OnInit} from '@angular/core';
import {AdComponent} from '../ad.component';

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.css']
})
export class HeroJobAdComponent implements OnInit, AdComponent {

  @Input() data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
