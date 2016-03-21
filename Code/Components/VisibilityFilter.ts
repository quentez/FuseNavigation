import { IDispatch } from "redux";
import Store from "../Store";
import { IVisibilityFilterContainer, VisibilityFilter } from "../Model";
import { setVisibilityFilterAction } from "../Actions";

interface IProps {
  filter: VisibilityFilter
}

const getCurrentFilter = (state) => state.visibilityFilter;

const mapContent = (props: IProps, currentFilter: IVisibilityFilterContainer) => {
  return {
    active: props.filter === currentFilter.filter
  };
};

const mapHandlers = (dispatch: IDispatch, props: IProps) => {
  return {
    onClick() {
      dispatch(setVisibilityFilterAction(props.filter));
    }
  }  
};

const visibilityFilter = Store.connect<IProps>(
  [getCurrentFilter],
  mapContent,
  mapHandlers
);

export default visibilityFilter;