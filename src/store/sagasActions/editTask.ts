import { TaskType } from '~store/reducers/tasksReducer';
import { EDIT_TASK } from '~store/sagasActionsType';

export const editTaskAction = (payload: TaskType): EditTaskActionType => ({
    type: EDIT_TASK,
    payload,
});

export type EditTaskActionType = {
    type: typeof EDIT_TASK;
    payload: TaskType;
};
