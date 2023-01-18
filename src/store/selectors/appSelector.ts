import { AppStoreType } from '~store/reducers/rootReducer';

export const getAppStatus = (state: AppStoreType) => state.app.status;
export const getAppError = (state: AppStoreType): boolean => state.app.error;
export const getDeviceId = (state: AppStoreType): string => state.app.deviceId;
