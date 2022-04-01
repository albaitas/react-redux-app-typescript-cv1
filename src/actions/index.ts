import {
  ITodo,
  TodoActionTypes,
  TodoAction,
  AddTodosStarted,
  AddTodosSuccess,
  AddTodosFailure,
  PaginateAction,
 SET_PAGINATE_PAGE
} from '../actions/types';
import { Dispatch } from 'redux';
import axios from 'axios';

export const addTodosStarted = (): AddTodosStarted => {
  return {
    type: TodoActionTypes.ADD_TODOS_STARTED
  };
};

export const addTodosSuccess = (todos: ITodo[]): AddTodosSuccess => {
  return {
    type: TodoActionTypes.ADD_TODOS_SUCCESS,
    payload: todos
  };
};

export const addTodosFailure = (error: any): AddTodosFailure => {
  return {
    type: TodoActionTypes.ADD_TODOS_FAILURE,
    payload: error.message
  };
};

export const addTodos = () => async (dispatch: Dispatch<TodoAction>) => {
  try {
    dispatch(addTodosStarted());
    const res = await axios('https://jsonplaceholder.typicode.com/todos');

    dispatch(addTodosSuccess(res.data));
  } catch (error) {
    dispatch(addTodosFailure(error));
  }
};

export const setPaginatePage = (page: number): PaginateAction => {
  return {
    type: SET_PAGINATE_PAGE,
    payload: page
  };
};
