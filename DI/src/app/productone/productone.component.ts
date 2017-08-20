import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product/product.service';
import {Product} from '../product/product';
import {ProductoneService} from './productone.service';

@Component({
  selector: 'app-productone',
  templateUrl: './productone.component.html',
  styleUrls: ['./productone.component.css'],
  providers: [
    {provide: ProductService, useClass: ProductoneService}
  ]
})
export class ProductoneComponent implements OnInit {

  public product: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
