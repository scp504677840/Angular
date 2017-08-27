import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {

  formModel: FormGroup;

  /**
   * 使用FormBuilder
   */
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: [''],
      phone: [''],
      pwdGroup: fb.group({
        password: [''],
        repassword: [''],
      }),
      emails: fb.array([
        [''],
        [''],
      ]),
    });
  }

  /**
   * 普通写法，也就是未使用FormBuilder
   */

  /*constructor() {
    // 表单组
    this.formModel = new FormGroup({
      // 用户名
      username: new FormControl(),
      // 手机号
      phone: new FormControl(),
      // 密码组
      pwdGroup: new FormGroup({
        // 密码
        password: new FormControl(),
        // 确认密码
        repassword: new FormControl(),
      }),
      // 邮箱
      /!*emails: new FormArray([
        new FormControl(),
        new FormControl(),
      ]),*!/
    });
  }*/

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

}
