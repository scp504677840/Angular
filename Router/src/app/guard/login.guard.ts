import {CanActivate} from '@angular/router';

export class LoginGuard implements CanActivate {

  constructor() {
  }

  canActivate() {

    const loggedIn: boolean = Math.random() < 0.5;

    if (!loggedIn) {
      console.log('请登录！！！');
    }

    return loggedIn;
  }

}
