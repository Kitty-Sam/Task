import { TaskType } from '~store/reducers/tasksReducer';
import { TOGGLE_IS_DONE } from '~store/sagasActionsType';

export const toggleIsDoneTaskAction = (payload: TaskType): ToggleIsDoneTaskActionType => ({
    type: TOGGLE_IS_DONE,
    payload,
});

export type ToggleIsDoneTaskActionType = {
    type: typeof TOGGLE_IS_DONE;
    payload: TaskType;
};
