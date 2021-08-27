import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "welcome", component: WelcomeComponent },
        { path: "", redirectTo: "welcome", pathMatch: "full" },
        { path: "**", component: PageNotFoundComponent },
      ]
      //   { enableTracing: true } //logs out routing events to console
    ),
  ],
  exports: [RouterModule],
  declarations: [WelcomeComponent, PageNotFoundComponent],
  providers: [],
})
export class AppRoutingModule {}
