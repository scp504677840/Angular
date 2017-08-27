# 表单校验器
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