import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {phoneValidator} from '../validator/app.validators';

@Directive({
  selector: '[appPhoneValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: phoneValidator, multi: true}],
})
export class PhoneValidatorDirective {

  constructor() {
  }

}
