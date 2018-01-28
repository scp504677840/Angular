import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DialogService {

  constructor() {
  }

  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');
    return Observable.of(confirmation);
  }

}
