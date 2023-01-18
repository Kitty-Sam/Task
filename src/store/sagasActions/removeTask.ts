import { REMOVE_TASK } from '~store/sagasActionsType';

export type RemoveTaskPayloadType = {
    taskId: string;
};

export const removeTaskAction = (payload: RemoveTaskPayloadType): RemoveTaskActionType => ({
    type: REMOVE_TASK,
    payload,
});

export type RemoveTaskActionType = {
    type: typeof REMOVE_TASK;
    payload: RemoveTaskPayloadType;
};
