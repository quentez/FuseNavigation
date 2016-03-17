declare class FuseObservable<T> {

    constructor(...values: T[]);

    length: number;
    value: T;

    getAt(index: number): T;

}

declare module "FuseObservable" {
  export = FuseObservable;
}
