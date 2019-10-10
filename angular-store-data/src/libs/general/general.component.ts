import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import * as GeneralActions from "./+state/general-data-access-state.actions";

@Component({
  selector: "app-general",
  templateUrl: "./general.component.html",
  styleUrls: ["./general.component.scss"]
})
export class GeneralComponent {
  isCollapsed = false;
  allChecked = false;
  indeterminate = true;
  list;
  list$;
  showAdd = false;

  constructor(private store: Store<any>) {
    store.pipe(select("entities")).subscribe(res => {
      console.log("res", res);
      this.list = res.entities;
    });
  }

  checkItem(item) {
    this.store.dispatch(GeneralActions.checkGeneralItem(item));
  }

  addItem(name) {
    console.log("name", name);
    const item = {
      name,
      done: false
    };
    this.store.dispatch(GeneralActions.addItem({ item }));
  }

  deleteItem(item) {
    this.store.dispatch(GeneralActions.deleteItem(item));
  }

  showOnlyDone() {}

  showOnlyToDo() {}
}
