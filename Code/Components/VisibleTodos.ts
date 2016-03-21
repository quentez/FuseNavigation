import Store from "../Store";
import { ITodo, VisibilityFilter } from "../Model";
import todo from "./Todo";

const getTodos = (state) => state.todos;
const getVisibilityFilter = (state) => state.visibilityFilter;

const mapContent = (props, todos: ITodo[], visibilityFilter: VisibilityFilter) => 
  (visibilityFilter === VisibilityFilter.Active
    ? todos.filter(t => !t.completed)
    : todos).map(t => todo({ id: t.id }));

const visibleTodos = Store.connect(
  [getTodos, getVisibilityFilter],
  mapContent
);

export default visibleTodos;