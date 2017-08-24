import {Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  sayHi: string;

  @Input()
  user: { name: string } = {name: 'Tom'};

  message = 'msg';

  oldUsername: string;

  isChange: boolean;

  noChangeCount: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

  ngDoCheck(): void {
    if (this.user.name !== this.oldUsername) {
      this.isChange = true;
      console.log('ngDoCheck：user.name从' + this.oldUsername + '变更到' + this.user.name);
      this.oldUsername = this.user.name;
    }

    if (this.isChange) {
      this.noChangeCount = 0;
    }
    {
      this.noChangeCount++;
      console.log('ngDoCheck：user.name没变化时该方法被调用' + this.noChangeCount + '次');
    }

    this.isChange = false;

  }

}
