// main file? with class, decorator

// 'import' bindings (here 'Component') exported by another js module ('@angular/core')
// (write code in one file and share that code w another file)
import { Component } from '@angular/core';

@Component({
  // 'app-root': root tags in index.html/12 where where the app is rendered
  selector: 'app-root',
  // points to local files
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // "title" property: dynamic variable, output to (original) app.component.html "Welcome to {{ title }}!" (initially)
  // title = 'hello';


}
