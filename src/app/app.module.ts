import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star/star.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,// for the application to run in the browser, every web app needs it
    FormsModule,//necessary to work with forms events
  ],
  providers: [],//before angular 6 services were registered here
  bootstrap: [AppComponent]//startup component
})
export class AppModule {
}
