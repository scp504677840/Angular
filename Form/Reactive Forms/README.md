# 响应式表单、FormBuilder
# 类名	指令
# FormGroup	formGroup | formGroupName
# FormControl	formControl | formControlName
# FormArray 无 | formArrayName
# FormGroup由一个或多个FormControl组成
	## userinfo : FormGroup = new FormGroup({
			from : new FormControl(),
			to : new FormControl(),
		});
# FormControl对应一个input或其他表单元素
	## username : FormControl = new FormControl();//初始值是可选的：new FormControl('张三');
# FormArray由任意个FormControl组成，可以添加、删除
	## emails : FormArray = new FormArray([
			new FormControl(),
			new FormControl(),//初始化两个FormControl，也可以没有初始化值。
		]);
# 注意：
	## 1.FormGroup(例：[FormGroup]="formModel")里面不可以有<div FormControl="username">，只能写FormControlName="username"

# FormBuilder
	constructor(fb : FormBuilder){
		this.formModel : fb.group({
			username : [''],
			phone : [''],
			pwdGroup : fb.group({
				password : [''],
				repassword : [''],
			}),
			emails : fb.array([
				[''],
				[''],
			]),
		});	
	}