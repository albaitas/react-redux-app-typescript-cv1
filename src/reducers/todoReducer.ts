import { ITodo, TodoAction, TodoActionTypes } from '../actions/types';

interface TodoState {
  loading: boolean;
  todos: ITodo[];
  error: null | string;
}

const defaultState: TodoState = {
  loading: false,
  todos: [],
  error: null
};

export const todoReducer = (state = defaultState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODOS_STARTED:
      return { loading: true, todos: [], error: null };
    case TodoActionTypes.ADD_TODOS_SUCCESS:
      return { loading: false, todos: action.payload, error: null };
    case TodoActionTypes.ADD_TODOS_FAILURE:
      return { loading: false, todos: [], error: action.payload };
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};
