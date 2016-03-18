/// <reference path="../../Infrastructure/Index.ts" />

namespace FuseNavigation.Fuse {
    
  // Declaration.
  declare class FuseObservable<T> {
    constructor(...values: T[]);

    length: number;
    value: T;

    getAt(index: number): T;
  }
  
  // Require.
  type FuseObservableType = typeof FuseObservable;
  var BaseObservable = Infrastructure.Require<FuseObservableType>("FuseObservable");

  // Exported class for use.
  export class Observable<T> extends BaseObservable<T> {
    constructor(...values: T[]) {
      super();
      return new BaseObservable<T>(...values);
    }
  }
}
