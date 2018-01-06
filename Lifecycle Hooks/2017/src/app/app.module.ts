import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {LoggerService} from './logger.service';

import {AppComponent} from './app.component';
import {PeekABooComponent} from './peek-a-boo/peek-a-boo.component';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { SpyComponent } from './spy/spy.component';
import { SpyDirective } from './spy/spy.directive';
import {FormsModule} from '@angular/forms';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { AfterContentComponent } from './after-content/after-content.component';


@NgModule({
  declarations: [
    AppComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    SpyComponent,
    SpyDirective,
    OnChangesParentComponent,
    OnChangesComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    AfterContentParentComponent,
    AfterContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
