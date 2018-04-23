// command center of all parts of the app - components, services, modules
// note: "ng g component components/user" added "user" items automatically to this file

// everything must be imported to this file:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

// then added to this directive, into different arrays:
@NgModule({

  // components go here:
  declarations: [
    AppComponent,
    UserComponent
  ],

  // modules go here:
  imports: [
    BrowserModule
  ],

  // services go here:
  providers: [],

  // bootstrap main root component ("AppComponent") goes here:
  bootstrap: [AppComponent]
})

export class AppModule { }
