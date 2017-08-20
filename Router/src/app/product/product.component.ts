import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Params} from '@angular/router';
import {Product} from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public id: number;

  public productName: string;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    // 查询参数形式
    // this.id = this.activatedRoute.snapshot.queryParams['id'];

    // 路径传递形式
    // this.id = this.activatedRoute.snapshot.params['id'];

    // 参数快照snapshot
    // this.id = this.activatedRoute.snapshot.params['id'];
    // 参数订阅
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['id']);

    this.activatedRoute.data.subscribe((data: { product: Product }) => {
      this.id = data.product.id;
      this.productName = data.product.name;
    });
  }

}
