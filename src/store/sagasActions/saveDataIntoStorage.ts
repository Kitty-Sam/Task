import { TaskType } from '~store/reducers/tasksReducer';
import { SAVE_DATA_INTO_STORAGE } from '~store/sagasActionsType';

export type SaveDataIntoStoragePayloadType = {
    tasks: TaskType[];
};

export const saveDataIntoStorageAction = (payload: SaveDataIntoStoragePayloadType): SaveDataIntoStorageActionType => ({
    type: SAVE_DATA_INTO_STORAGE,
    payload,
});

export type SaveDataIntoStorageActionType = {
    type: typeof SAVE_DATA_INTO_STORAGE;
    payload: SaveDataIntoStoragePayloadType;
};
