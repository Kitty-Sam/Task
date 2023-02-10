import { ITask } from '~store/reducers/types';
import { SAVE_DATA_INTO_STORAGE } from '~store/sagasActions/types';

export type SaveDataIntoStoragePayloadType = {
    tasks: ITask[];
};

export const saveDataIntoStorageAction = (payload: SaveDataIntoStoragePayloadType): SaveDataIntoStorageActionType => ({
    type: SAVE_DATA_INTO_STORAGE,
    payload,
});

export type SaveDataIntoStorageActionType = {
    type: typeof SAVE_DATA_INTO_STORAGE;
    payload: SaveDataIntoStoragePayloadType;
};
