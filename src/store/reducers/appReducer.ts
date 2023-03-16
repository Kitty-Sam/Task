import { AppActions } from '~store/actions/actionsType';
import { ActionsType, IApp } from '~store/reducers/types';

export enum RequestStatus {
    IDLE = 'IDLE',
    FAILED = 'FAILED',
    LOADING = 'LOADING',
    SUCCEEDED = 'SUCCEEDED',
}

const initialState: IApp = {
    status: RequestStatus.IDLE,
    error: false,
    deviceId: '',
};

export const appReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case AppActions.APP_SET_STATUS:
            return { ...state, status: action.payload.status };

        case AppActions.APP_SET_ERROR: {
            return { ...state, error: action.payload.error };
        }
        case AppActions.APP_SET_DEVICE_ID: {
            return { ...state, deviceId: action.payload.id };
        }
        default:
            return state;
    }
};
