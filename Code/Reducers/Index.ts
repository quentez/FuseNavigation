import Observable = require("FuseJS/Observable");
import * as Redux from "redux";
import * as Immutable from "immutable";
import * as ActionTypes from "../Constants/ActionTypes";

export interface IState {
  title: string;
  list: IListItem[];
}

interface IListItem {
  id: number;
  text: string;
}

const titleActionsMap = {
  [ActionTypes.ADD_ITEM](state: string, action: ActionTypes.IAddItemAction) {
    return "Added item";
  },
  [ActionTypes.REMOVE_ITEM](state: string, action: ActionTypes.IRemoveItemAction) {
    return "Removed item: " + action.id;
  }
}

const listActionsMap = {
  [ActionTypes.ADD_ITEM](state: IListItem[], action: ActionTypes.IAddItemAction) {
    // Add the new item to the state.
    return [
      ...state,
      <IListItem> {
        id: findNewItemId(state),
        text: action.text
      }
    ];
  },
  [ActionTypes.REMOVE_ITEM](state: IListItem[], action: ActionTypes.IRemoveItemAction) {
    // Remove the last item from the list.
    console.log("Removing action:", action.id);
    return state.filter(item => item.id !== action.id);
  }
}

export const MainReducer = <Redux.IReducer<IState>> Redux.combineReducers({
  title: TitleReducer,
  list: ListReducer
});

function TitleReducer(state: string = "Main Title", action: Redux.IAction) {  
  // Find a reducer for the specified action type.
  const reduceFunction = titleActionsMap[action.type];
  if (!reduceFunction)
    return state;
   
  // If an action was found, reduce.
  return reduceFunction(state, action);
}

export function ListReducer(state: IListItem[] = [], action: Redux.IAction) {
  // Find a reducer for the specified action type.
  const reduceFunction = listActionsMap[action.type];
  if (!reduceFunction)
    return state;
   
  // If an action was found, reduce.
  return reduceFunction(state, action);
}

function findNewItemId(state: IListItem[]) {
  return state.reduce((p, c) => c.id > p ? c.id : p, 0) + 1;
}