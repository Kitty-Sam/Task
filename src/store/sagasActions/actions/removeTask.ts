import { REMOVE_TASK } from '~store/sagasActions/types';

export interface RemoveTaskPayloadType {
    taskId: string;
}

export const removeTaskAction = (payload: RemoveTaskPayloadType) => ({
    type: REMOVE_TASK,
    payload,
});

export type RemoveTask = {
    type: typeof REMOVE_TASK;
    payload: RemoveTaskPayloadType;
};
