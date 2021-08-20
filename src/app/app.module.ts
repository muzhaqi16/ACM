import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star/star.component";
import {ProductDetailComponent} from './products/product-detail.component';
import {WelcomeComponent} from "./home/welcome.component";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,// for the application to run in the browser, every web app needs it
    FormsModule,//necessary to work with forms events
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}//404 not found routing
    ])
  ],
  providers: [],//before angular 6 services were registered here
  bootstrap: [AppComponent]//startup component
})
export class AppModule {
}
