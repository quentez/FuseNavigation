import { createAction } from "redux-actions";
import * as Constants from "../Constants";

let lastTodoId = 0;
export const addTodoAction = createAction(Constants.ADD_TODO, text => <Constants.IAddTodoPayload> {
  id: lastTodoId++,
  text: text
});

export const toggleTodoAction = createAction(Constants.TOGGLE_TODO, (id: number) => <Constants.IToggleTodoPayload> {
  id: id
});

export const removeTodoAction = createAction(Constants.REMOVE_TODO, (id: number) => <Constants.IRemoveTodoPayload> {
  id: id
});

export const setVisibilityFilterAction = createAction(Constants.SET_VISIBILITY_FILTER, filter => <Constants.ISetVisibilityFilterPayload> {
  filter: filter
});