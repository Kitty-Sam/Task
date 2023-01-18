import { RequestStatusType } from '../reducers/appReducer';

export enum AppActions {
    APP_SET_ERROR = 'app_set_error',
    APP_SET_STATUS = 'app_set_status',
    APP_SET_DEVICE_ID = 'app_set_device_id',
}

export const toggleAppStatus: AppStatusToggleActionType = (payload: RequestStatusType) => ({
    type: AppActions.APP_SET_STATUS,
    payload,
});
export type AppStatusToggleActionType = (payload: RequestStatusType) => {
    payload: RequestStatusType;
    type: AppActions.APP_SET_STATUS;
};

export const toggleAppError: AppErrorToggleActionType = (payload: boolean) => ({
    type: AppActions.APP_SET_ERROR,
    payload,
});
export type AppErrorToggleActionType = (payload: boolean) => {
    payload: boolean;
    type: AppActions.APP_SET_ERROR;
};

export const saveDeviceID: SaveDeviceIDActionType = (payload: string) => ({
    type: AppActions.APP_SET_DEVICE_ID,
    payload,
});
export type SaveDeviceIDActionType = (payload: string) => {
    payload: string;
    type: AppActions.APP_SET_DEVICE_ID;
};
