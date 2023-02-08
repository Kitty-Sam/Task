import { FETCH_TASKS } from '~store/sagasActions/types';

export const fetchTasksAction = (): FetchTasksActionType => ({
    type: FETCH_TASKS,
});

export type FetchTasksActionType = {
    type: typeof FETCH_TASKS;
};
