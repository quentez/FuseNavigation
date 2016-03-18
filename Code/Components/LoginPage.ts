/// <reference path="../Dependencies/Redux/Index.ts" />

namespace FuseNavigation.Components {
  export class LoginPage {
    constructor(store: Redux.IStore<any>) {
      console.log("Created Login");
      
      // UX Actions.
      this.increment = () => {
        store.dispatch({
          type: "INCREMENT"
        });
      };
      
      this.decrement = () => { 
        store.dispatch({
          type: "DECREMENT"
        });
      };
      
      this.incrementAsync = () => {
        setTimeout(() => {
          this.increment();
        }, 3000);
      };
    }
    
    // UX Actions.
    increment: () => void;
    decrement: () => void;
    incrementAsync: () => void;
  }
}