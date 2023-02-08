import { AppStoreType } from '~store/reducers/rootReducer';

export const getAppStatus = (state: AppStoreType) => state.app.status;
export const getDeviceId = (state: AppStoreType): string => state.app.deviceId;
