import { ADD_TASK } from '~store/sagasActionsType';

export type AddTaskPayloadType = {
    // deviceId: string;
    taskId: string;
    chapter: string;
    description: string;
    title: string;
    time: string;
};

export const addTaskAction = (payload: AddTaskPayloadType): AddTaskActionType => ({
    type: ADD_TASK,
    payload,
});

export type AddTaskActionType = {
    type: typeof ADD_TASK;
    payload: AddTaskPayloadType;
};
