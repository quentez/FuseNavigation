import Store from "../Store";
import { ITodo, IVisibilityFilterContainer, VisibilityFilter } from "../Model";
import todo from "./Todo";

const getTodos = (state) => state.todos;
const getCurrentFilter = (state) => state.visibilityFilter;

const mapContent = (props, todos: ITodo[], currentFilter: IVisibilityFilterContainer) => {
  return {
    list: todos.map(t => todo({ id: t.id })),
    isActiveListEmpty: (currentFilter.filter === VisibilityFilter.Active && todos.every(t => t.completed)),
    isAllListEmpty: todos.length === 0
  };
}

const visibleTodos = Store.connect(
  [getTodos, getCurrentFilter],
  mapContent
);

export default visibleTodos;