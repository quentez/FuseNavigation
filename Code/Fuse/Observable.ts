/// <reference path="../Native/FuseObservable.d.ts" />
/// <reference path="../Infrastructure/Index.ts" />

namespace FuseNavigation.Fuse {
  type FuseObservableType = typeof FuseObservable;
  var BaseObservable = Infrastructure.Require<FuseObservableType>("FuseObservable");

  export class Observable<T> extends BaseObservable<T> {
    constructor(...values: T[]) {
      super();
      return new BaseObservable<T>(...values);
    }
  }
}
