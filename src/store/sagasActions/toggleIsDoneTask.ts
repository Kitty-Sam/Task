import { TaskType } from '~store/reducers/tasksReducer';
import { TOGGLE_IS_DONE, TOGGLE_IS_IMPORTANT } from '~store/sagasActionsType';

export const toggleIsDoneTaskAction = (payload: TaskType): ToggleIsDoneTaskActionType => ({
    type: TOGGLE_IS_DONE,
    payload,
});

export type ToggleIsDoneTaskActionType = {
    type: typeof TOGGLE_IS_DONE;
    payload: TaskType;
};

//
export const toggleIsImportantTaskAction = (payload: TaskType): ToggleIsImportantTaskActionType => ({
    type: TOGGLE_IS_IMPORTANT,
    payload,
});

export type ToggleIsImportantTaskActionType = {
    type: typeof TOGGLE_IS_IMPORTANT;
    payload: TaskType;
};
