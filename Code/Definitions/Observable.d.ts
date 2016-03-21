declare module "FuseJS/Observable" {
  function MakeObservable<T>(...values: T[]): FuseObservable<T>;
  export = MakeObservable;
}

declare class FuseObservable<T> {
  length: number;
  value: T;
  
  getAt(index: number): T;
  add(value: T): void;
  remove(value: T): void;
  tryRemove(value: T): boolean;
  removeWhere(predicate: (item: T) => boolean): void;
  forEach(action: (item: T) => void): void;
  replaceAt(index: number, value: T): void;
  replaceAll(values: Array<T>): void;
  refreshAll(values: Array<any>, compare: (oldItem: any, newItem: T) => boolean, update: (oldItem: any, newItem: T) => void, map: (newItem: any) => T);
  clear(): void;
  indexOf(value: T): number;
  contains(value: T): boolean;
  
  where(predicate: (item: T) => boolean): FuseObservable<T>;
  map<U>(mapper: (item: T) => U): FuseObservable<U>;
  count(selector?: (item: T) => boolean): FuseObservable<number>;
  not(): FuseObservable<boolean>;
  filter(predicate: (item: T) => boolean): FuseObservable<T>;
  
  addSubscriber(subscriber: (value: FuseObservable<T>) => void): void;
  removeSubscriber(subscriber: (value: FuseObservable<T>) => void): void;
  
  toString(): string;
}