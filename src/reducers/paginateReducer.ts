import { PaginateAction, SET_PAGINATE_PAGE } from '../actions/types';

export interface PaginateState {
  page: number;
  limit: number;
}

const defaultState: PaginateState = {
  page: 0,
  limit: 10
};

export const paginateReducer = (state = defaultState, action: PaginateAction): PaginateState => {
  switch (action.type) {
    case SET_PAGINATE_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
