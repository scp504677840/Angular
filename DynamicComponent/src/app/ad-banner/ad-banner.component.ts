import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdItem} from '../ad-item';
import {AdDirective} from '../ad.directive';
import {AdComponent} from '../ad.component';

/**
 * <ng-template>元素就是刚才制作的指令将应用到的地方。
 * 要应用AdDirective，回忆一下来自ad.directive.ts的选择器ad-host。
 * 把它应用到<ng-template>（不用带方括号）。 这下，Angular就知道该把组件动态加载到哪里了。
 * <ng-template>元素是动态加载组件的最佳选择，因为它不会渲染任何额外的输出。
 *
 * AdItem对象指定要加载的组件类，以及绑定到该组件上的任意数据。 AdService可以返回广告活动中的那些广告。
 *
 * 给AdBannerComponent传入一个组件数组可以让我们在模板中放入一个广告的动态列表，而不用写死在模板中。
 *
 * 通过getAds()方法，AdBannerComponent可以循环遍历AdItems的数组，并且每三秒调用一次loadComponent()来加载新组件。
 */
@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() ads: AdItem[];

  currentAddIndex = -1;

  @ViewChild(AdDirective) adHost: AdDirective;

  interval: any;

  /**
   *
   * @param {ComponentFactoryResolver} componentFactoryResolver
   */
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  /**
   * loadComponent()方法使用某种算法选择了一个广告。
   * （译注：循环选取算法）首先，它把currentAddIndex递增一，
   * 然后用它除以AdItem数组长度的余数作为新的currentAddIndex的值，
   * 最后用这个值来从数组中选取一个adItem。
   *
   * 在loadComponent()选取了一个广告之后，它使用ComponentFactoryResolver来为每个具体的组件解析出一个ComponentFactory。
   * 然后ComponentFactory会为每一个组件创建一个实例。
   *
   * 接下来，我们要把viewContainerRef指向这个组件的现有实例。
   * 但我们怎么才能找到这个实例呢？
   * 很简单，因为它指向了adHost，而这个adHost就是我们以前设置过的指令，用来告诉Angular该把动态组件插入到什么位置。
   *
   * 回忆一下，AdDirective曾在它的构造函数中注入了一个ViewContainerRef。
   * 因此这个指令可以访问到这个被我们用作动态组件宿主的元素。
   *
   * 要把这个组件添加到模板中，我们可以调用ViewContainerRef的createComponent()。
   *
   * createComponent()方法返回一个引用，指向这个刚刚加载的组件。
   * 使用这个引用就可以与该组件进行交互，比如设置它的属性或调用它的方法。
   *
   * 对选择器的引用
   * 通常，Angular编译器会为模板中所引用的每个组件都生成一个ComponentFactory类。
   * 但是，对于动态加载的组件，模板中不会出现对它们的选择器的引用。
   * 要想确保编译器照常生成工厂类，就要把这些动态加载的组件添加到NgModule的entryComponents数组中：
   * entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
   */
  loadComponent() {
    // 获取当前显示广告的下标
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    // 获取广告
    const adItem = this.ads[this.currentAddIndex];
    // 使用ComponentFactoryResolver来为每个具体的组件解析出一个ComponentFactory，
    // 然后ComponentFactory为每一个组件创建一个实例。
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    // 获取视图容器引用
    const viewContainerRef = this.adHost.viewContainerRef;
    // 清空视图容器内容
    viewContainerRef.clear();

    // 把组件添加到模版中。
    // createComponent方法返回一个引用，指向这个刚刚加载的组件。
    // 使用这个引用就可以与该组件进行交互，比如设置它的属性或调用它的方法。
    const componentRef = viewContainerRef.createComponent(componentFactory);
    // 拿到组件的实例并设置数据。
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
