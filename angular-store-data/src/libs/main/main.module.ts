import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { RouterModule } from "@angular/router";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
export { MainComponent };

// @NgModule decorator with its metadata
@NgModule({
  declarations: [MainComponent],
  imports: [BrowserModule, RouterModule, NgZorroAntdModule],
  providers: [],
  bootstrap: [MainComponent],
  exports: [MainComponent]
})
export class MainModule {}
