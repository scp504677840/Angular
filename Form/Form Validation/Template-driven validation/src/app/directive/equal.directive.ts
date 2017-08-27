import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {pwdGroupValidator} from '../validator/app.validators';

@Directive({
  selector: '[appEqual]',
  providers: [{provide: NG_VALIDATORS, useValue: pwdGroupValidator, multi: true}],
})
export class EqualDirective {

  constructor() {
  }

}
