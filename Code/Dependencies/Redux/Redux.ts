/// <reference path="../../Infrastructure/Index.ts" />

namespace FuseNavigation.Redux {
  
  // Declaration.
  export interface IAction {
    type: string | number;
  }

  export interface IActionGeneric<TPayload> extends IAction {
    payload?: TPayload;
    error?: Error;
    meta?: any;
  }

  export interface IReducer<TState> {
    (state: TState, action: IAction): TState;
  }

  export interface IReducerMap {
    [key: string]: IReducerMap | IReducer<any>
  }

  export interface IDispatch {
    (action: IAction): IAction;
  }

  export interface IMiddlewareStore<TState> {
    getState(): TState;

    dispatch: IDispatch;
  }

  export interface IStore<TState> extends IMiddlewareStore<TState> {
    subscribe(listener: (state: TState) => any): () => void;

    replaceReducer(nextReducer: IReducer<TState>): void;
  }

  export interface IMiddleware<State> {
    (middlewareStore: IMiddlewareStore<State>): (next: IDispatch) => IDispatch;
  }

  export interface ICreateStoreGeneric<TState> {
    (reducer: IReducer<TState>, initialState?: TState): IStore<TState>;
  }

  export interface IStoreEnhancerGeneric<TState> {
    (createStore: ICreateStoreGeneric<TState>): ICreateStoreGeneric<TState>;
  }
  
  declare class ReduxMain {
    createStore<TState>(reducer: IReducer<TState>, initialState?: TState): IStore<TState>;

    combineReducers(reducers: IReducerMap): IReducer<any>;
    combineReducers<TState>(reducers: IReducerMap): IReducer<TState>;

    applyMiddleware<TState>(...middlewares: IMiddleware<TState>[]): IStoreEnhancerGeneric<TState>;

    bindActionCreators<TActionCreator extends Function | { [key: string]: Function }>(actionCreators: TActionCreator, dispatch: IDispatch): TActionCreator;

    compose<TArg>(...functions: { (arg: TArg): TArg }[]): (arg: TArg) => TArg;
    compose(...functions: { (arg: any): any }[]): (arg: any) => any;
  }
  
  let ReduxMainInstance = Infrastructure.Require<ReduxMain>("Redux");
  
  export function Instance() {
    return ReduxMainInstance;
  }
}