import {Resolve} from '@angular/router';
import {Product} from '../product/product';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductResolve implements Resolve<Product> {

  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {

    const id = route.params['id'];

    if (id == 1) {
      return new Product(1, 'iPhone7');
    } else {
      this.router.navigate(['/home']);
      return null;
    }

  }

}
