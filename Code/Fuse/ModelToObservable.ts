export default function ModelToObservable(observable: (...values) => FuseObservable<any>, existingObservable: FuseObservable<any>, currentModel: any, newModel: any) {  
  // Two very different cases, whether it's an array or an object.
  if (newModel instanceof Array) {
    // If the observable doesn't exist, create it.
    if (!existingObservable)
      existingObservable = observable();
    
    // Copy the observable to an array.
    let observableItems = [];
    existingObservable.forEach(observableItem => observableItems.push(observableItem));
    
    // Update all the existing observables.
    observableItems.forEach((observableItem, index) => ModelToObservable(observable, <FuseObservable<any>>observableItem, currentModel[index], currentModel[index]));
    
    // Find the items we'll need to remove, and remove them.
    let oldItems = (currentModel && currentModel.filter(item => newModel.indexOf(item) < 0)) || [];
    oldItems.forEach(item => existingObservable.remove(observableItems[currentModel.indexOf(item)]));
    
    // Update all the values in the observable.
    existingObservable.refreshAll(newModel, 
      (oldItem, newItem) => currentModel[observableItems.indexOf(oldItem)] === newItem,
      (oldItem, newItem) => undefined,
      newItem => ModelToObservable(observable, null, null, newItem));      
  }
  else if (newModel instanceof Object) {
    // If the observable doesn't exist, create it.
    if (!existingObservable)
      existingObservable = observable({});
      
    let sameKeys;
    let oldKeys = [];
    let newKeys = [];
    if (currentModel !== newModel)
      if (currentModel) {
        let currentModelKeys = Object.keys(currentModel);
        let newModelKeys = Object.keys(newModel);
        
        sameKeys = currentModelKeys.filter(key => newModelKeys.indexOf(key) >= 0);
        oldKeys = currentModelKeys.filter(key => newModelKeys.indexOf(key) < 0);
        newKeys = newModelKeys.filter(key => currentModelKeys.indexOf(key) < 0);
      }
      else {
        sameKeys = [];
        newKeys = Object.keys(newModel);
      }
    else {
      sameKeys = Object.keys(newModel);
    }
    
    // Remove the old keys.
    oldKeys.forEach(key => delete existingObservable.value[key]);
    
    // Update the existing keys.
    sameKeys.forEach(key => ModelToObservable(observable, existingObservable.value[key], currentModel[key], newModel[key]));
    
    // Add the new keys.
    newKeys.forEach(key => existingObservable.value[key] = ModelToObservable(observable, null, null, newModel[key]));
  }
  else {
    // Prevent undefined values.
    if (!newModel)
      newModel = null;
    
    // If the observable doesn't exist, create it.
    if (!existingObservable)
      existingObservable = observable(newModel);
    // Otherwise, if the value changed, update the observable.
    else if (currentModel !== newModel)
      existingObservable.value = newModel;
  }
  
  // Return the updated observable.  
  return existingObservable;
}