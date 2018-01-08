import {Injectable} from '@angular/core';
import {AdItem} from './ad-item';
import {HeroProfileComponent} from './hero-profile/hero-profile.component';
import {HeroJobAdComponent} from './hero-job-ad/hero-job-ad.component';

@Injectable()
export class AdService {

  constructor() {
  }

  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: '勇敢', bio: '勇敢，因为他们来了'}),
      new AdItem(HeroProfileComponent, {name: '聪明', bio: '聪明，他们来了'}),
      new AdItem(HeroJobAdComponent, {
        headline: '招聘几个职位',
        body: '提交您的简历!'
      }),
      new AdItem(HeroJobAdComponent, {
        headline: '商务合作',
        body: '请联系管理员！'
      }),
    ];
  }

}
