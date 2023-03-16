import { AppStoreType } from '~store/reducers/rootReducer';

export const getTasks = (state: AppStoreType) => state.tasks.tasks;
export const getCurrentTasks = (state: AppStoreType) => state.tasks.currentTasks;
