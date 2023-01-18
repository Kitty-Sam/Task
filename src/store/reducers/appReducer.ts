import { AppActions, saveDeviceID, toggleAppError, toggleAppStatus } from '../actions/appAC';

export enum RequestStatus {
    IDLE = 'IDLE',
    FAILED = 'FAILED',
    FIRST_LAUNCH = 'FIRST_LAUNCH',
    SECOND_LAUNCH = 'SECOND_LAUNCH',
    LOADING = 'LOADING',
    SUCCEEDED = 'SUCCEEDED',
}

const initialState = {
    status: RequestStatus.FIRST_LAUNCH,
    error: false,
    deviceId: '',
};

type InitialStateType = {
    error: boolean;
    status: RequestStatusType;
    deviceId: string;
};

export type RequestStatusType = RequestStatus;

export const appReducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case AppActions.APP_SET_STATUS:
            return { ...state, status: action.payload };

        case AppActions.APP_SET_ERROR: {
            return { ...state, error: action.payload };
        }
        case AppActions.APP_SET_DEVICE_ID: {
            return { ...state, deviceId: action.payload };
        }
        default:
            return initialState;
    }
};

export type ActionsType =
    | ReturnType<typeof toggleAppStatus>
    | ReturnType<typeof toggleAppError>
    | ReturnType<typeof saveDeviceID>;
