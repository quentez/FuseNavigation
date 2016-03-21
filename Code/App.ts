/*
 * App entry point.
 */

import Observable = require("FuseJS/Observable");
import ModelToObservable from "./Fuse/ModelToObservable";

import Store from "./Store";
import TodoAppComponent from "./Components";

// Build the initial state.
let currentState = TodoAppComponent();
let state = ModelToObservable(Observable, null, null, currentState);

// Subscribe to store changes in order to update the visual state.
Store.subscribe(() => {
  let newState = TodoAppComponent();
  ModelToObservable(Observable, state, currentState, newState);
  currentState = newState;
  console.log("Got state:", JSON.stringify(newState));
});

console.log("App started.");

export = state;