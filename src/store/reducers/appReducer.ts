import { AppActions, saveDeviceID, toggleAppError, toggleAppStatus } from '../actions/appAC';

export enum RequestStatus {
    IDLE = 'IDLE',
    FAILED = 'FAILED',
    LOADING = 'LOADING',
    SUCCEEDED = 'SUCCEEDED',
}

const initialState = {
    status: RequestStatus.IDLE,
    error: false,
    deviceId: '',
};

type InitialStateType = {
    error: boolean;
    status: RequestStatusType;
    deviceId: string;
};

export type RequestStatusType = RequestStatus;

// eslint-disable-next-line @typescript-eslint/default-param-last
export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
            return state;
    }
};

export type ActionsType =
    | ReturnType<typeof toggleAppStatus>
    | ReturnType<typeof toggleAppError>
    | ReturnType<typeof saveDeviceID>;
