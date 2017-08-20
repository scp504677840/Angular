import {Injectable} from '@angular/core';
import {ProductService} from '../product/product.service';
import {Product} from '../product/product';
import {LoggerService} from '../logger/logger.service';

@Injectable()
export class ProducttwoService implements ProductService {

  constructor(public logger: LoggerService) {
  }

  getProduct(): Product {
    return new Product(3, 'Sony', 5999, '索尼手机');
  }

}
