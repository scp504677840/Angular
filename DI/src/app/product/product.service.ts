import {Injectable} from '@angular/core';
import {Product} from './product';
import {LoggerService} from '../logger/logger.service';

@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) {
  }

  /**
   * 获取商品信息
   * @returns {Product} 商品
   */
  getProduct(): Product {
    return new Product(0, 'iPhone7', 5889, '苹果最新手机');
  }

}
