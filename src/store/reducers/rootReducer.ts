import { combineReducers } from 'redux';

import { appReducer } from '~store/reducers/appReducer';
import { categoriesReducer } from '~store/reducers/categoriesReducer';
import { tasksReducer } from '~store/reducers/tasksReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    tasks: tasksReducer,
    categories: categoriesReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;
