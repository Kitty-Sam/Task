import { AppStoreType } from '~store/reducers/rootReducer';

export const getAppStatus = (state: AppStoreType) => state.app.status;
export const getAppError = (state: AppStoreType) => state.app.error;
