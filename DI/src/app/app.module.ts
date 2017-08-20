import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {LoggerService} from './logger/logger.service';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {ProductService} from './product/product.service';
import {ProductoneComponent} from './productone/productone.component';
import {ProductoneService} from './productone/productone.service';
import {ProducttwoComponent} from './producttwo/producttwo.component';
import {ProducttwoService} from './producttwo/producttwo.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductoneComponent,
    ProducttwoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [LoggerService,
    /* 简单的工厂注入方法 */
    /* {
    provide: ProductService, useFactory: () => {
      const logger = new LoggerService();
      const temp = Math.random() > 0.5;
      if (temp) {
        return new ProductService(logger);
      } else {
        return new ProducttwoService(logger);
      }
    }
  }, *//*{
      provide: ProductService, useFactory: (logger: LoggerService, isDev) => {
        if (isDev) {
          return new ProductService(logger);
        } else {
          return new ProducttwoService(logger);
        }
      }, deps: [LoggerService, 'IS_DEV_ENV']
    }, */{
      provide: ProductService, useFactory: (logger: LoggerService, appConfig) => {
        if (appConfig.isDev) {
          return new ProductService(logger);
        } else {
          return new ProducttwoService(logger);
        }
      }, deps: [LoggerService, 'APP_CONFIG']
    }, ProductoneService, {
      provide: 'IS_DEV_ENV', useValue: true
    }, {provide: 'APP_CONFIG', useValue: {isDev: false}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
