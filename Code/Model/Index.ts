export interface IState {
  todos: ITodo[],
  visibilityFilter: VisibilityFilter
}

export interface ITodo {
  id: number;
  text: string,
  completed: boolean
}

export enum VisibilityFilter {
  Active, 
  All
};