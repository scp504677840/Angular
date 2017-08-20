import {Component, OnInit, Injector} from '@angular/core';
import {Product} from '../product/product';
import {ProductService} from '../product/product.service';

@Component({
  selector: 'app-producttwo',
  templateUrl: './producttwo.component.html',
  styleUrls: ['./producttwo.component.css']
})
export class ProducttwoComponent implements OnInit {

  public product: Product;

  private productService: ProductService;

  constructor(private injector: Injector) {
    // 手动注入
    this.productService = this.injector.get(ProductService);
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
