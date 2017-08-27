# 模板式表单校验
# 内置校验模块：required、minlength
## 使用方法
```
<div>
	<input type="text" ngModel required minlength="6" name="username">
</div>
```
# 自定义校验模块就是自定义指令
```
// 其中provide 提供的是@angular/forms 模块里面的NG_VALIDATORS静态变量
// useValue提供的是 phoneValidator校验方法，
// multi变量表示的是允许NG_VALIDATORS静态变量的值被覆盖。
// 该指令建好以后，就当作检验器使用。
@Directive({
  selector: '[appPhoneValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: phoneValidator, multi: true}],
})
export class PhoneValidatorDirective {

  constructor() {
  }

}
```
## 使用方法
```
<div>
	<input type="text" ngModel required minlength="6" appPhoneValidator name="username">
</div>
```
# 模板式表单里的状态字段
## 注意：
### 在模板式表单中，不可以直接使用状态字段，如：`<div [hidden]="myForm.form.get('phone').touched">手机号至少为6位</div>`
### 上述代码的功能是当手机号输入框被访问过时，就显示该div，其中touched作为表单中的状态字段是不可以在模板式表单中被这样直接访问。
# 在模板式表单中访问状态字段的正确方式：
```
// 模板中的代码
<input type="text" name="phone" (input)="onPhoneInput(myForm)">

// 控制器中的代码
onPhoneInput(myForm: NgForm){
	const phone = myForm.form.get('phone');
	this.phoneValid = phone.valid;
	this.phoneTouched = phone.touched;
}

// 然后我们模板中的代码，需要控制错误信息显示与否的代码片段
<div [hidden]="phoneValid || phoneTouched">
	<div [hidden]="!myForm.form.hasError('required','phone')">
		手机号至少为6位
	</div>
</div>
```