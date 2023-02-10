import { ITask } from '~store/reducers/types';
import { TOGGLE_IS_DONE, TOGGLE_IS_IMPORTANT } from '~store/sagasActions/types';

export const toggleIsDoneTaskAction = (payload: ITask) => ({
    type: TOGGLE_IS_DONE,
    payload,
});

export type ToggleIsDone = {
    type: typeof TOGGLE_IS_DONE;
    payload: ITask;
};

//
export const toggleIsImportantTaskAction = (payload: ITask) => ({
    type: TOGGLE_IS_IMPORTANT,
    payload,
});

export type ToggleIsImportant = {
    type: typeof TOGGLE_IS_IMPORTANT;
    payload: ITask;
};
