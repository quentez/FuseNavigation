import { IDispatch } from "redux";
import Store from "../Store";
import { IState, ITodo, IVisibilityFilterContainer, VisibilityFilter } from "../Model"
import { toggleTodoAction, removeTodoAction } from "../Actions";

interface IProps {
  id: number
}

const getTodo = (state: IState, props: IProps) => state.todos.find(t => t.id === props.id);
const getCurrentFilter = (state) => state.visibilityFilter;

const mapContent = (props, todo: ITodo, currentFilter: IVisibilityFilterContainer) =>
  Object.lightAssign({}, todo, {
    hidden: currentFilter.filter === VisibilityFilter.Active && todo.completed
  });

const mapHandlers = (dispatch: IDispatch, todo: ITodo) => {
  return {
    toggle() {
      dispatch(toggleTodoAction(todo.id));
    },
    remove() {
      dispatch(removeTodoAction(todo.id));
    }
  }
};

const todo = Store.connect<IProps>(
  [getTodo, getCurrentFilter],
  mapContent,
  mapHandlers
);

export default todo;
