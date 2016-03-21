import * as Redux from "redux";
import RootReducer from "../Reducers";

// Create the store.
class Store<TState> {
  constructor(reducer: Redux.IReducer<TState>) {
    this.store = Redux.createStore(reducer);
  }
  
  private store: Redux.IStore<TState>;
  private lastConnectId = 0;

  subscribe(listener: () => any): () => any {
    return this.store.subscribe(listener);
  }

  // Expose method to generate components.
  connect<TProps>(
    dependencies: { (state?: TState, props?: TProps): any }[], 
    stateToProps: (props?: TProps, ...dependencies: any[]) => any, 
    dispatchToProps?: (dispatch: Redux.IDispatch, props?: TProps, ...dependencies: any[]) => any
  ) {
    // Each connect method gets its own unique Id.
    let connectId = this.lastConnectId++; 
    
    return (props?: TProps) => {
      // Get the current state from the store.    
      let state = this.store.getState();
      
      // Evaluate all the dependencies.
      let dependencyValues = dependencies.map(d => d(state, props));
      
      // Check if we'll need to re-generate the content.
      let shouldRefresh = dependencyValues.some(d => !d 
        || !d._connectCache 
        || !d._connectCache[connectId]);
      
      // If not, return the cached value.
      if (dependencyValues.length > 0 && !shouldRefresh)
        return dependencyValues[0]._connectCache[connectId];
        
      // Build the new content from the props and dependencies.
      var innerContent = stateToProps(props, ...dependencyValues);
      if (innerContent instanceof Array)
        innerContent = {list: innerContent}; 
      
      let content = Object.assign({},
        innerContent,
        dispatchToProps ? dispatchToProps(this.store.dispatch, props, ...dependencyValues) : null);
      
      // Update the dependencies with the new content.
      dependencyValues.forEach(d => {
        if (!d)
          return;
          
        if (!d._connectCache)
          d._connectCache = {};
          
        d._connectCache[connectId] = content;
      })
        
      // Return the new content.
      return content;
    }
  }
}

export default new Store(RootReducer);