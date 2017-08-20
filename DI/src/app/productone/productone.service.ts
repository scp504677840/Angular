import {Injectable} from '@angular/core';
import {ProductService} from '../product/product.service';
import {Product} from '../product/product';
import {LoggerService} from '../logger/logger.service';

@Injectable()
export class ProductoneService implements ProductService {

  constructor(public logger: LoggerService) {
  }

  getProduct(): Product {
    return new Product(1, 'Sumsung7', 4999, '三星手机');
  }

}
