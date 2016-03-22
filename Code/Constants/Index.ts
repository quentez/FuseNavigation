import { VisibilityFilter } from "../Model";

export const ADD_TODO = "ADD_TODO";
export interface IAddTodoPayload {
  id: number,
  text: string
}

export const TOGGLE_TODO = "TOGGLE_TODO";
export interface IToggleTodoPayload {
  id: number;
}

export const REMOVE_TODO = "REMOVE_TODO";
export interface IRemoveTodoPayload {
  id: number;
}

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export interface ISetVisibilityFilterPayload {
  filter: VisibilityFilter
}