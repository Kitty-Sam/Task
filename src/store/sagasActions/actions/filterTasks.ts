import { FILTER_TASKS } from '~store/sagasActions/types';

export interface FilterTaskPayloadType {
    searchValue: string;
    chapter: string;
    period: string;
}

export const filterTasksAction = (payload: FilterTaskPayloadType) => ({
    type: FILTER_TASKS,
    payload,
});

export type FilterTasks = {
    type: typeof FILTER_TASKS;
    payload: FilterTaskPayloadType;
};
