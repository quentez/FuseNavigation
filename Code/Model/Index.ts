export interface IState {
  todos: ITodo[],
  visibilityFilter: IVisibilityFilterContainer
}

export interface ITodo {
  id: number;
  text: string,
  completed: boolean
}

export interface IVisibilityFilterContainer {
  filter: VisibilityFilter;
}

export enum VisibilityFilter {
  Active, 
  All
};