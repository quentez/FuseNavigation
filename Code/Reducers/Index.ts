import { combineReducers } from "redux";
import { handleActions, handleAction, IAction } from "redux-actions";

import * as Constants from "../Constants";
import { IState, ITodo, IVisibilityFilterContainer, VisibilityFilter } from "../Model";

const todo = handleActions({
  [Constants.ADD_TODO](state: ITodo, action: IAction<Constants.IAddTodoPayload>) {
    // Add the new action to the state.
    return <ITodo> {
      id: action.payload.id,
      text: action.payload.text,
      completed: false
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
  },
  [Constants.REMOVE_TODO](state: ITodo[], action: IAction<Constants.IRemoveTodoPayload>) {
    return state.filter(t => t.id !== action.payload.id);
  }
}, [{id: 1424, text: "This is a test", completed: false}]);

const visibilityFilter = handleActions({
  [Constants.SET_VISIBILITY_FILTER](state: IVisibilityFilterContainer, action: IAction<Constants.ISetVisibilityFilterPayload>) {
    return Object.lightAssign({}, state, <IVisibilityFilterContainer> {
      filter: action.payload.filter
    });
  }
}, <IVisibilityFilterContainer> { filter: VisibilityFilter.Active });
  

const todoApp = combineReducers<IState>({
  todos,
  visibilityFilter
});

export default todoApp;