import { FETCH_TASKS } from '~store/sagasActionsType';

export type FetchTasksPayloadType = {
    deviceId: string;
};

export const fetchTasksAction = (payload: FetchTasksPayloadType): FetchTasksActionType => ({
    type: FETCH_TASKS,
    payload,
});

export type FetchTasksActionType = {
    type: typeof FETCH_TASKS;
    payload: FetchTasksPayloadType;
};
