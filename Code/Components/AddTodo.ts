import { IDispatch } from "redux";
import Store from "../Store";
import { addTodoAction } from "../Actions";

const mapContent = () => {
  return {
    newTodoText: ""
  };
}

const mapHandlers = (dispatch: IDispatch) => {
  return {
    onClick(e) {
      // Validate parameters.
      if (!e || !e.data.value || !e.data.value.newTodoText)
        return;
        
      // Extract the text value from the parameters.
      let text = <string>e.data.value.newTodoText.value;
      if (!text)
        return;
      
      // Reset the value.
      e.data.value.newTodoText.value = "";
      
      // Post the action.
      dispatch(addTodoAction(text));
    }
  }
}

const addTodo = Store.connect(
  [],
  mapContent,
  mapHandlers
);

export default addTodo;