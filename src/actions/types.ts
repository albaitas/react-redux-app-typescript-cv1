export interface ITodo {
  id: number;
  title: string;
}

export enum TodoActionTypes {
  ADD_TODOS_STARTED = 'ADD_TODOS_STARTED',
  ADD_TODOS_SUCCESS = 'ADD_TODOS_SUCCESS',
  ADD_TODOS_FAILURE = 'ADD_TODOS_FAILURE'
}

export interface AddTodosStarted {
  type: TodoActionTypes.ADD_TODOS_STARTED;
}

export interface AddTodosSuccess {
  type: TodoActionTypes.ADD_TODOS_SUCCESS;
  payload: ITodo[];
}

export interface AddTodosFailure {
  type: TodoActionTypes.ADD_TODOS_FAILURE;
  payload: string;
}

export type TodoAction = AddTodosSuccess | AddTodosStarted | AddTodosFailure;

export const SET_PAGINATE_PAGE = "SET_PAGINATE_PAGE";

export interface PaginateAction {
  type: typeof SET_PAGINATE_PAGE;
  payload: number;
}
