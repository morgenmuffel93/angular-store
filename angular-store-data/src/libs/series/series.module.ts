import { NgModule } from "@angular/core";
import { SeriesComponent } from "./series.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: SeriesComponent }];

// @NgModule decorator with its metadata
@NgModule({
  declarations: [SeriesComponent],
  imports: [],
  providers: [],
  bootstrap: [SeriesComponent]
})
export class SeriesModule {}

@NgModule({
  imports: [RouterModule.forChild(routes), SeriesModule],
  exports: [RouterModule]
})
export class SeriesRouting {}
