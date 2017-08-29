# HTTP
## 第一种普通请求处理方式：
```
dataSource: Observable<any>;

products: Array<any> = [];

constructor(private http: Http){
	this.dataSource = this.http.get('/api/product/all').map((res)=>res.json());
}

ngOnInit(){
	this.dataSource.subscribe((data)=>this.products = data);
}
```
## 第二种管道请求处理方式：
```
// 控制器
products: Obserable<any>;

constructor(private http: Http){
	const mHeader = new Headers();
	this.products = this.http.get('/api/product/all').map((res)=>res.json());
}

// 模板，使用管道 async，效果和上面的普通请求处理方式一样
<ul>
	<li *ngFor="let product of products | async">
		{{}}
	</li>
</ul>
```
## Headers请求头
```
const mHeaders = new Headers();
mHeaders.append('Authorization','basic 123456');
this.http.get('/api/product/all',{headers: mHeaders}).map((res)=>res.json());
```
