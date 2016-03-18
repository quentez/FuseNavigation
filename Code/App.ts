/// <reference path="./Dependencies/Fuse/Index.ts" />
/// <reference path="./Dependencies/Redux/Index.ts" />
/// <reference path="./Components/Index.ts" />
/// <reference path="./Reducers/Index.ts" />

/*
 * App entry point.
 */

namespace FuseNavigation {

  export class App {
    constructor() {
      // Initialize Redux.
      const redux = Redux.Instance();
      const store = redux.createStore(Reducers.Counter, 0);
      
      // Initialize model.
      this.state = new Fuse.Observable(store.getState());
      store.subscribe(() => this.state.value = store.getState());
      
      // Initialize components.
      this.login = new Components.LoginPage(store);
    }
    
    login: Components.LoginPage;
    state: Fuse.Observable<number>;
  }
}
