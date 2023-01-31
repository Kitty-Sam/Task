import { FILTER_TASKS } from '~store/sagasActionsType';

export type FilterTaskPayloadType = {
    searchValue: string;
    chapter: string;
    period: string;
};

export const filterTasksAction = (payload: FilterTaskPayloadType): FilterTasksActionType => ({
    type: FILTER_TASKS,
    payload,
});

export type FilterTasksActionType = {
    type: typeof FILTER_TASKS;
    payload: FilterTaskPayloadType;
};
