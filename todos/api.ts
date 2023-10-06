/* Core */

import { createApi} from '@reduxjs/toolkit/query/react';
import { BaseQuery } from './baseQuery';
import { todoSlice } from './slice';


export const todoApi = createApi({
    tagTypes: [],
    reducerPath: todoSlice.name,
    baseQuery: BaseQuery,
    // refetchOnMountOrArgChange: 30,
    endpoints: () => ({}),
  });
  