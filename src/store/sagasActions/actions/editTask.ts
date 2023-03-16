import { ITask } from '~store/reducers/types';
import { EDIT_TASK } from '~store/sagasActions/types';

export const editTaskAction = (payload: ITask) => ({
    type: EDIT_TASK,
    payload,
});

export type EditTask = {
    type: typeof EDIT_TASK;
    payload: ITask;
};
