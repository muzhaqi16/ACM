import {Component} from '@angular/core';

//@ are called decorators(in this case component decorator)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//linked template
  //template : "<h1>{{ pageTitle }}<h1>" if you don't want to use a file, enclose it in single, double or backticks
  styleUrls: ['./app.component.css'],
})//no semicolon here
export class AppComponent {//use PascalCasing for class name
  pageTitle: string = 'Acme Product Management';// properties are case sensitive, camel case
}
