# 表单校验器、响应式表单校验、状态字段
## Angular表单校验器就是一个方法，这个方法必须接受一个AbstractControl类型的参数，然后它必须有一个返回值，
## 返回值可以是任意类型的对象，但这个对象只有一个要求{[key : string] : any}，key必须是 string 类型，value可以是任意类型。
	## xxxValidator(control : AbstractControl) : {[key : string] : any} {
		return xxx;
	}
	## usernameValidator(control : FormControl) : any {
		let username = control.value;
		let isValid = username==='Tom';
		return isValid ? null : {username : true};
	}
	## pwdGroupValidator(group : FormGroup) : any {
		let password = group.get('password').value;
		let repassword = group.get('repassword').value;
		let isValid = password === repassword;
		return isValid ? null : {password : true};
	}
# 使用方法
	## FormControl：
		username : ['', this.usernameValidator]
	## FormGroup：
		pwdGroup : fb.group({
			password : [''],
			repassword : [''],
		},{validator : this.pwdGroupValidator});
# 注意：
	## FormControl 与 FormGroup 的校验器使用方式有点不同，
	## FormControl 直接写方法 this.usernameValidator
	## FormGroup 需要使用对象 {validator : this.pwdGroupValidator}
# 状态字段
## touched 和 untouched ：用来判断用户是否访问过一个字段
## pristine 和 dirty ：如果一个字段的值从未改变过，那么pristine=true,dirty=false，反之pristine=false,dirty=true
## pending 当一个字段正处于异步校验时，pending=true
# 使用方法
## touched 和 untouched
```
<div [hidden]="formModel.get('username').valid && formModel.get('username').untouched">
	<div [hidden]="!formModel.get('username').valid">用户名是必填项</div>
</div>
```
## pristine 和 dirty
```
<div [hidden]="formModel.get('phone').valid && formModel.get('phone').pristine">
	<div [hidden]="!formModel.get('phone').valid" >手机号必须11位</div>
</div>
```
## pending
```
<div [hidden]="!formModel.get('phone').pending">
	正在验证手机号的合法性...
</div>
```