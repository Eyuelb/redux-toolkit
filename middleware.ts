/* Core */

import { todoApiQuery } from "./todos/query";


const middleware = [todoApiQuery.middleware];

export { middleware };
