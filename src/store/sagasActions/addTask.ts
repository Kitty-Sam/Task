import { ADD_TASK } from '~store/sagasActionsType';

export type AddTaskPayloadType = {
    taskId: string;
    chapter: string;
    description: string;
    title: string;
    time: { from: string; till: string };
    isDone: boolean;
    isImportant: boolean;
};

export const addTaskAction = (payload: AddTaskPayloadType): AddTaskActionType => ({
    type: ADD_TASK,
    payload,
});

export type AddTaskActionType = {
    type: typeof ADD_TASK;
    payload: AddTaskPayloadType;
};
