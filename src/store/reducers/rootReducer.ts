import { combineReducers } from 'redux';

import { appReducer } from '~store/reducers/appReducer';
import { tasksReducer } from '~store/reducers/tasksReducer';

export const rootReducer = combineReducers<any>({
    app: appReducer,
    tasks: tasksReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;
