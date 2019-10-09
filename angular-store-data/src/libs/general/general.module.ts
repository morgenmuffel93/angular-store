import { NgModule } from "@angular/core";
import { GeneralComponent } from "./general.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: GeneralComponent }];

// @NgModule decorator with its metadata
@NgModule({
  declarations: [GeneralComponent],
  providers: [],
  bootstrap: [GeneralComponent]
})
export class GeneralModule {}

@NgModule({
  imports: [RouterModule.forChild(routes), GeneralModule],
  exports: [RouterModule]
})
export class GeneralRouting {}
