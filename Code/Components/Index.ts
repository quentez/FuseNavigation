import Store from "../Store";
import { VisibilityFilter } from "../Model";
import addTodo from "./AddTodo";
import visibleTodos from "./VisibleTodos";
import visibilityFilter from "./VisibilityFilter";

const mapContent = () => {
  return {
    addTodo: addTodo(),
    todos: visibleTodos(),
    filterActive: visibilityFilter({ filter: VisibilityFilter.Active }),
    filterAll: visibilityFilter({ filter: VisibilityFilter.All })
  };
}

const todoApp = Store.connect(
  [],
  mapContent
);

export default todoApp;