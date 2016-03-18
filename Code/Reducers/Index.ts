/// <reference path="../Dependencies/Redux/Index.ts" />

namespace FuseNavigation.Reducers {
  export function Counter(state: number = 0, action: Redux.IAction) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }
}