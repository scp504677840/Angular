import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder, AbstractControl, Validators} from '@angular/forms';
import {AppValidators, phoneAsyncValidator, pwdGroupValidator, phoneValidator} from '../validator/app.validators';

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
      username: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(11)], phoneAsyncValidator],
      pwdGroup: fb.group({
        password: ['', [AppValidators.pwddValidator, Validators.minLength(6)]],
        repassword: [''],
      }, {validator: pwdGroupValidator}),
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

    // 获取属性的校验结果
    const isValid = this.formModel.get('phone').valid;
    console.log(isValid);

    // 获取校验结果的错误信息
    const errors = this.formModel.get('phone').errors;
    console.log(JSON.stringify(errors));

    // 整个表单验证结果
    console.log('整个表单验证结果：' + this.formModel.valid);

    console.log(this.formModel.value);
  }

}
