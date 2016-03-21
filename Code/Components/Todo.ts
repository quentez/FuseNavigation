import { IDispatch } from "redux";
import Store from "../Store";
import { IState, ITodo } from "../Model"
import { toggleTodoAction } from "../Actions";

interface IProps {
  id: number
}

const getTodo = (state: IState, props: IProps) => state.todos.find(t => t.id === props.id);

const mapContent = (props, todo: ITodo) => todo;

const mapHandlers = (dispatch: IDispatch, todo: ITodo) => {
  return {
    onClick() {
      dispatch(toggleTodoAction(todo.id))
    }
  }
};

const todo = Store.connect<IProps>(
  [getTodo],
  mapContent
);

export default todo;
