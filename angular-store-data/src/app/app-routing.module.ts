import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GeneralModule } from "src/libs/general/general.module";
import { SeriesModule } from "src/libs/series/series.module";
import { MainComponent } from "src/libs/main/main.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/general" },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "general",
        loadChildren: "src/libs/general/general.module#GeneralRouting"
      },
      {
        path: "series",
        loadChildren: "src/libs/series/series.module#SeriesRouting"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
