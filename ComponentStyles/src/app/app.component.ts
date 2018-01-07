import {Component, HostBinding} from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hero = new Hero('Human Torch', ['Mister Fantastic', 'Invisible Woman', 'Thing']);

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }

}
