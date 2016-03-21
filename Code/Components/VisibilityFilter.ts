import { IDispatch } from "redux";
import Store from "../Store";
import { VisibilityFilter } from "../Model";
import { setVisibilityFilterAction } from "../Actions";

interface IProps {
  filter: VisibilityFilter
}

const getCurrentFilter = (state) => state.visibilityFilter;

const mapContent = (props: IProps, currentFilter: VisibilityFilter) => {
  return {
    active: props.filter === currentFilter
  };
}

const mapHandlers = (dispatch: IDispatch, props: IProps) => {
  return {
    onClick() {
      dispatch(setVisibilityFilterAction(props.filter));
    }
  }  
}

const visibilityFilter = Store.connect<IProps>(
  [getCurrentFilter],
  mapContent,
  mapHandlers
)

export default visibilityFilter;