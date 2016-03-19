import * as Redux from "redux";

export const ADD_ITEM = "ADD_ITEM";
export interface IAddItemAction extends Redux.IAction {
  text: string
} 

export const REMOVE_ITEM = "REMOVE_ITEM";
export interface IRemoveItemAction extends Redux.IAction {
  id: number;
}