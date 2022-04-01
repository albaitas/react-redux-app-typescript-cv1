import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { paginateReducer } from "./paginateReducer";


export const rootReducer = combineReducers({
  todoReducer,
  paginateReducer
})
export type RootState = ReturnType<typeof rootReducer>;