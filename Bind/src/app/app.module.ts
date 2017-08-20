import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BindComponent} from './bind/bind.component';
import {BindHtmlComponent} from './bind-html/bind-html.component';
import {BindCSSComponent} from './bind-css/bind-css.component';
import {BindTwoComponent} from './bind-two/bind-two.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    BindHtmlComponent,
    BindCSSComponent,
    BindTwoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
