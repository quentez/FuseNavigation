interface ObjectConstructor {
  /**
    * Copy the values of all of the enumerable own properties from one or more source objects to a 
    * target object. Returns the target object.
    * @param target The target object to copy to.
    * @param source The source object from which to copy properties.
    */
  assign<T, U>(target: T, source: U): T & U;

  /**
    * Copy the values of all of the enumerable own properties from one or more source objects to a 
    * target object. Returns the target object.
    * @param target The target object to copy to.
    * @param source1 The first source object from which to copy properties.
    * @param source2 The second source object from which to copy properties.
    */
  assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;

  /**
    * Copy the values of all of the enumerable own properties from one or more source objects to a 
    * target object. Returns the target object.
    * @param target The target object to copy to.
    * @param source1 The first source object from which to copy properties.
    * @param source2 The second source object from which to copy properties.
    * @param source3 The third source object from which to copy properties.
    */
  assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

  /**
    * Copy the values of all of the enumerable own properties from one or more source objects to a 
    * target object. Returns the target object.
    * @param target The target object to copy to.
    * @param sources One or more source objects from which to copy properties
    */
  assign(target: any, ...sources: any[]): any;
  
    /**
    * Copy the values of all of the enumerable own properties from one or more source objects to a 
    * target object. Returns the target object.
    * @param target The target object to copy to.
    * @param source The source object from which to copy properties.
    */
  lightAssign<T, U>(target: T, source: U): T & U;

  /**
    * Copy the values of all of the enumerable own properties from one or more source objects to a 
    * target object. Returns the target object.
    * @param target The target object to copy to.
    * @param source1 The first source object from which to copy properties.
    * @param source2 The second source object from which to copy properties.
    */
  lightAssign<T, U, V>(target: T, source1: U, source2: V): T & U & V;

  /**
    * Copy the values of all of the enumerable own properties from one or more source objects to a 
    * target object. Returns the target object.
    * @param target The target object to copy to.
    * @param source1 The first source object from which to copy properties.
    * @param source2 The second source object from which to copy properties.
    * @param source3 The third source object from which to copy properties.
    */
  lightAssign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

  /**
    * Copy the values of all of the enumerable own properties from one or more source objects to a 
    * target object. Returns the target object.
    * @param target The target object to copy to.
    * @param sources One or more source objects from which to copy properties
    */
  lightAssign(target: any, ...sources: any[]): any;
}