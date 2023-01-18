import { AppStoreType } from '~store/reducers/rootReducer';

export const getTasks = (state: AppStoreType) => state.tasks.tasks;
