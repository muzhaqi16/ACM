import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { SelectiveService } from "./selective-strategy.service";
import { AuthGuard } from "./user/auth.guard";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "welcome", component: WelcomeComponent },
        {
          path: 'products',
          data: { preload: true },
          loadChildren: () => import('./products/product.module').then(m => m.ProductModule),
          canActivate: [AuthGuard],
          // canLoad: [AuthGuard]
        },
        { path: "", redirectTo: "welcome", pathMatch: "full" },
        { path: "**", component: PageNotFoundComponent },
      ], {
      preloadingStrategy: SelectiveService,
      // preloadingStrategy: PreloadAllModules,
      enableTracing: true //logs out routing events to console
    }
    ),
  ],
  exports: [RouterModule],
  declarations: [WelcomeComponent, PageNotFoundComponent],
  providers: [],
})
export class AppRoutingModule { }
