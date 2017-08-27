import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernameValid = true;

  usernameUnTouched = true;

  phoneValid = true;

  phoneUnTouched = true;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(value: any, valid: boolean) {
    console.log('表单是否都验证成功：' + valid);
    console.log(value);
  }

  onUsernameInput(myForm: NgForm) {
    if (myForm) {
      this.usernameValid = myForm.form.get('username').valid;
      this.usernameUnTouched = myForm.form.get('username').untouched;
    }
  }

  onPhoneInput(myForm: NgForm) {
    if (myForm) {
      const phone = myForm.form.get('phone');
      this.phoneValid = phone.valid;
      this.phoneUnTouched = phone.untouched;
    }
  }

}
