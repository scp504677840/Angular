import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  @Input()
  name: string;

  /**
   * 构造函数，在组件创建时调用，只会被调用一次。
   */
  constructor() {
    console.log('constructor：' + name);
  }

  ngOnInit() {
    console.log('ngOnInit：' + name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes['name'].currentValue;
    console.log('当前值：' + currentValue + 'ngOnChanges' + name);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
