import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { CountdownChildComponent } from './countdown-child/countdown-child.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { CountdownViewChildComponent } from './countdown-view-child/countdown-view-child.component';
import { CountdownViewChildParentComponent } from './countdown-view-child-parent/countdown-view-child-parent.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { AstronautComponent } from './astronaut/astronaut.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownChildComponent,
    CountdownParentComponent,
    CountdownViewChildComponent,
    CountdownViewChildParentComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
