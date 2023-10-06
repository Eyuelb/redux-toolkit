import { todoApiQuery } from "./todos/query";
import { todoSlice } from './todos/slice';

/* Reducer */
export const reducer = {
 [todoApiQuery.reducerPath]: todoApiQuery.reducer,
 todo:todoSlice.reducer
}
