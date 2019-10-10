import { createReducer, on, State } from "@ngrx/store";
import { getGeneral } from "./general-data-access-state.actions";
import { checkGeneralItem } from "./general-data-access-state.actions";
import * as ScoreboardPageActions from "./general-data-access-state.actions";

export const initialState = {
  entities: [
    {
      name: "Sleep",
      done: false
    },
    {
      name: "Eat",
      done: false
    },
    {
      name: "Play",
      done: false
    }
  ]
};

const _generalReducer = createReducer(
  initialState,
  on(ScoreboardPageActions.getGeneral, state => ({
    ...state
  })),
  on(ScoreboardPageActions.checkGeneralItem, (state, { item }) => ({
    ...state,
    item
  })),
  on(ScoreboardPageActions.addItem, (state, { item }) => ({
    entities: [...state.entities, item]
  })),
  on(ScoreboardPageActions.deleteItem, (state, { item }) => ({
    ...state,
    entities: state.entities.filter(i => {
      i != item;
    })
  }))
);

export function generalReducer(state, action) {
  return _generalReducer(state, action);
}
