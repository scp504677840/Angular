import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestSummaryComponent } from './quest-summary/quest-summary.component';
import { HeroMainComponent } from './hero-main/hero-main.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroTeamComponent } from './hero-team/hero-team.component';
import { HeroControlsComponent } from './hero-controls/hero-controls.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestSummaryComponent,
    HeroMainComponent,
    HeroDetailsComponent,
    HeroTeamComponent,
    HeroControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
