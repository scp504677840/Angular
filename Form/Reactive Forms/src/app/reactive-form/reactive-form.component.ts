import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  /**
   * FormControl构造函数接受一个可选的初始值
   *
   * @type {FormControl} 表单元素
   */
  username: FormControl = new FormControl('aaa');

  /**
   * FormGroup由一个或多个FormControl组成。
   *
   * @type {FormGroup} 表单组元素
   */
  formModel: FormGroup = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl(),
    }),
    emails: new FormArray([
      new FormControl('a@a.com'),
      new FormControl('b@b.com'),
    ]),
    // 在formGroup里面使用formControl的话只能使用其formControlName进行绑定
    phone: new FormControl('153311112222'),
  });

  /**
   * FormArray由一个或多个FormControl组成。
   * 可以任意的添加或减少FormControl的数量。
   *
   * @type {FormArray} 表单元素集合
   */

  /*emails: FormArray = new FormArray([
    new FormControl('a@a.com'),
    new FormControl('b@b.com'),
  ]);*/

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  addEmail() {
    const emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

}
