import { GET_DEVICE_ID } from '~store/sagasActions/types';

export const getDeviceIdAction = () => ({
    type: GET_DEVICE_ID,
});

export type GetDeviceId = {
    type: typeof GET_DEVICE_ID;
};
