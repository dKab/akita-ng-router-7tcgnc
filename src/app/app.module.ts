import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule } from "@angular/router";
import { AComponent } from "./a/a.component";
import { PreventLeaveGuard } from "./prevent-leave.guard";
import { AkitaNgRouterStoreModule } from "@datorama/akita-ng-router-store";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AkitaNgRouterStoreModule,
    AkitaNgDevtools,
    RouterModule.forRoot([
      {
        path: ":id",
        component: AComponent,
        // canDeactivate: [PreventLeaveGuard]
      },
    ])
  ],
  declarations: [AppComponent, HelloComponent, AComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
