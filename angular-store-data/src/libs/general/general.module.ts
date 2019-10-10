import { NgModule } from "@angular/core";
import { GeneralComponent } from "./general.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { generalReducer } from "./+state/general-data-access-state.reducer";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";

const routes: Routes = [{ path: "", component: GeneralComponent }];

// @NgModule decorator with its metadata
@NgModule({
  declarations: [GeneralComponent],
  providers: [],
  bootstrap: [GeneralComponent],
  imports: [CommonModule, NgZorroAntdModule, FormsModule]
})
export class GeneralModule {}

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GeneralModule,
    StoreModule.forRoot({ entities: generalReducer })
  ],
  exports: [RouterModule]
})
export class GeneralRouting {}
