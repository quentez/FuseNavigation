import { combineReducers } from "redux";
import { handleActions, handleAction, IAction } from "redux-actions";

import * as Constants from "../Constants";
import { IState, ITodo, VisibilityFilter } from "../Model";

const todo = handleActions({
  [Constants.ADD_TODO](state: ITodo, action: IAction<Constants.IAddTodoPayload>) {
    // Add the new action to the state.
    return <ITodo> {
      id: action.payload.id,
      text: action.payload.text
    }
  },
  [Constants.TOGGLE_TODO](state: ITodo, action: IAction<Constants.IToggleTodoPayload>) {
    // If this isn't the target todo, return.
    if (state.id !== action.payload.id)
      return state;
      
    return Object.lightAssign({}, state, <ITodo> {
      completed: !state.completed
    });
  }
});

const todos = handleActions({
  [Constants.ADD_TODO](state: ITodo[], action: IAction<Constants.IAddTodoPayload>) {
    return [
      ...state,
      todo(undefined, action)
    ];
  },
  [Constants.TOGGLE_TODO](state: ITodo[], action: IAction<Constants.IToggleTodoPayload>) {
    return state.map(t => todo(t, action));
  }
}, []);

const visibilityFilter = handleActions({
  [Constants.SET_VISIBILITY_FILTER](state: VisibilityFilter, action: IAction<Constants.ISetVisibilityFilterPayload>) {
    return action.payload.filter;
  }
}, VisibilityFilter.Active);
  

const todoApp = combineReducers<IState>({
  todos,
  visibilityFilter
});

export default todoApp;