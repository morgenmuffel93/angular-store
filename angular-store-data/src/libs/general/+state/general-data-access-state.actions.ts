import { createAction, props } from "@ngrx/store";

export const getGeneral = createAction("[General Component] Get list");

export const checkGeneralItem = createAction(
  "[General Component] Check or uncheck general item",
  props<{ item }>()
);

export const addItem = createAction(
  "[General Component] Add new todo item",
  props<{ item }>()
);

export const deleteItem = createAction(
  "[General Component] Delete todo item",
  props<{ item }>()
);
