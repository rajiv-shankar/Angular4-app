// command center ("meeting place") of all parts of the app - components, services, modules
// see: https://v2.angular.io/docs/ts/latest/guide/appmodule.html


// everything must be imported to this file:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// manually added:
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
// note: "ng g component components/user" added "user" items automatically to this file
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component'

const appRoutes: Routes = [
  {path:'', component:UserComponent},
  {path:'about', component:AboutComponent}
];

// then added to this decorator (fn that adds metadata to a class) into different arrays:
// @NgModule decorator identifies AppModule as an Angular module (NgModule) class
@NgModule({

  // components go here:
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],

  // modules go here:
  imports: [
    BrowserModule,  // every app needs this to run in a browser
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],

  // services go here:
  providers: [DataService],

  // bootstrap main root component goes here:
  // root component that Angular creates and inserts into the index.html host web page
  bootstrap: [AppComponent]
})

// finally exported
// AppModule: root module that you bootstrap to launch the application
export class AppModule { }
