import * as Redux from "redux";
import * as ActionTypes from "../Constants/ActionTypes";

export default class ConversationListPage {
  constructor(store: Redux.IStore<any>) {      
    // UX Actions.
    this.addItem = () => {
      store.dispatch(<ActionTypes.IAddItemAction> {
        type: ActionTypes.ADD_ITEM,
        text: "This is a new item"
      });
    };
    
    this.removeItem = (e) => {
      store.dispatch(<ActionTypes.IRemoveItemAction> {
        type: ActionTypes.REMOVE_ITEM,
        id: e.data.value.id.value
      });
    }
  }
  
  // UX Actions.
  addItem: () => void;
  removeItem: (e) => void;
}