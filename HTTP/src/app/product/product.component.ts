import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  /*// 第一种方式：普通请求处理方法
  dataSource: Observable<any>;

  products: Array<any> = [];

  constructor(private http: Http) {
    this.dataSource = this.http.get('/api/product/all').map((res) => res.json());
  }

  ngOnInit() {
    this.dataSource.subscribe((data) => this.products = data);
  }*/

  // 第二种管道请求处理方式
  products: Observable<any>;

  constructor(private http: Http) {

    // 演示：请求头
    // 注意：Headers请导入import { Headers } from '@angular/http';
    const mHeders = new Headers();
    mHeders.append('Authorization', 'basic 123456');
    this.products = this.http.get('/api/product/all', {headers: mHeders}).map((res) => res.json());
  }

  ngOnInit() {
  }

}
