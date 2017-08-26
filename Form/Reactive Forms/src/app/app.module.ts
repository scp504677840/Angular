import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {RegisterComponent} from './register/register.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {ReactiveRegisterComponent} from './reactive-register/reactive-register.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    RegisterComponent,
    ReactiveFormComponent,
    ReactiveRegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
