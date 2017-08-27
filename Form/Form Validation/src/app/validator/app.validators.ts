import {FormControl, AbstractControl, FormGroup} from '@angular/forms';

export class AppValidators {

  static pwddValidator(control: FormControl): any {
    const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const valid = myreg.test(control.value);
    console.log(valid);
    return valid ? null : {password: true};
  }

  /**
   * 自定义验证器
   * @param {AbstractControl} control 控制器
   * @returns {{[p: string]: any}} 返回值
   */
  xxx(control: AbstractControl): { [key: string]: any } {
    return null;
  }

}

/**
 * 密码校验器
 * @param {FormControl} control
 * @returns {any}
 */
export function pwdValidator(control: FormControl): any {
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myreg.test(control.value);
  console.log(valid);
  return valid ? null : {password: true};
}

/**
 * 密码组校验器，校验密码和确认密码是否正确合法
 * @param {FormGroup} group
 * @returns {any}
 */
export function pwdGroupValidator(group: FormGroup): any {
  const password = group.get('password').value;
  const repassword = group.get('repassword').value;
  const isTrue = password === repassword;
  console.log('密码校验结果：' + isTrue);
  return isTrue ? null : {password: true};
}

