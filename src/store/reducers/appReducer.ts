import { AppActions, toggleAppError, toggleAppStatus } from '../actions/appAC';

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
};

type InitialStateType = {
    error: boolean;
    status: RequestStatusType;
};

export type RequestStatusType = RequestStatus;

export const appReducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case AppActions.APP_SET_STATUS:
            return { ...state, status: action.payload };

        case AppActions.APP_SET_ERROR: {
            return { ...state, error: action.payload };
        }
        default:
            return initialState;
    }
};

export type ActionsType = ReturnType<typeof toggleAppStatus> | ReturnType<typeof toggleAppError>;
