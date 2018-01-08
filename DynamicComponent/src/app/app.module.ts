import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AdDirective} from './ad.directive';
import {HeroProfileComponent} from './hero-profile/hero-profile.component';
import {HeroJobAdComponent} from './hero-job-ad/hero-job-ad.component';
import {AdBannerComponent} from './ad-banner/ad-banner.component';
import {AdService} from './ad.service';


@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    HeroProfileComponent,
    HeroJobAdComponent,
    AdBannerComponent
  ],
  entryComponents: [
    HeroProfileComponent,
    HeroJobAdComponent],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
