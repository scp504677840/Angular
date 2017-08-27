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
import { PhoneValidatorDirective } from './directive/phone-validator.directive';
import { EqualDirective } from './directive/equal.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    RegisterComponent,
    ReactiveFormComponent,
    ReactiveRegisterComponent,
    PhoneValidatorDirective,
    EqualDirective,
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
