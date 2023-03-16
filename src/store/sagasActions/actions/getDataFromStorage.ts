import { GET_DATA_FROM_STORAGE } from '~store/sagasActions/types';

export const getDataFromStorageAction = (): GetDataFromStorageActionType => ({
    type: GET_DATA_FROM_STORAGE,
});

export type GetDataFromStorageActionType = {
    type: typeof GET_DATA_FROM_STORAGE;
};
