import { GET_DEVICE_ID } from '~store/sagasActionsType';

export const getDeviceIdAction = (): GetDeviceIdActionType => ({
    type: GET_DEVICE_ID,
});

export type GetDeviceIdActionType = {
    type: typeof GET_DEVICE_ID;
};
