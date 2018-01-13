import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { Keyup1Component } from './keyup-1/keyup-1.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { Keyup2Component } from './keyup-2/keyup-2.component';
import { Keyup3Component } from './keyup-3/keyup-3.component';
import { Keyup4Component } from './keyup-4/keyup-4.component';
import { LittleTourComponent } from './little-tour/little-tour.component';
import { ClickMe2Component } from './click-me-2/click-me-2.component';


@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    Keyup1Component,
    LoopBackComponent,
    Keyup2Component,
    Keyup3Component,
    Keyup4Component,
    LittleTourComponent,
    ClickMe2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
