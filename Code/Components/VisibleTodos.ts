import Store from "../Store";
import { ITodo, IVisibilityFilterContainer, VisibilityFilter } from "../Model";
import todo from "./Todo";

const getTodos = (state) => state.todos;
const getCurrentFilter = (state) => state.visibilityFilter;

const mapContent = (props, todos: ITodo[], currentFilter: IVisibilityFilterContainer) => 
  (currentFilter.filter === VisibilityFilter.Active
    ? todos.filter(t => !t.completed)
    : todos.filter(t => t.completed)).map(t => todo({ id: t.id }));

const visibleTodos = Store.connect(
  [getTodos, getCurrentFilter],
  mapContent
);

export default visibleTodos;