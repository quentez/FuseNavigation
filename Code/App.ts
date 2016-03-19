/*
 * App entry point.
 */

import Observable = require("FuseJS/Observable");
import * as Redux from "redux";
import * as Immutable from "immutable";

import ModelToObservable from "./Fuse/ModelToObservable";
import * as Reducers from "./Reducers/Index";
import ConversationListPage from "./Components/ConversationListPage";

class App {
  constructor() {
    // Initialize Redux.
    const store = Redux.createStore(Reducers.MainReducer);

    // Initialize model.
    let currentState = store.getState();
    this.state = ModelToObservable(Observable, null, null, currentState);
    store.subscribe(() => {
      let newState = store.getState(); 
      ModelToObservable(Observable, this.state, currentState, newState);
      currentState = newState;
    });
    
    console.log("App started.");

    // Initialize components.
    this.conversationList = new ConversationListPage(store);
  }

  conversationList: ConversationListPage;
  state: FuseObservable<any>;
}

export = new App();