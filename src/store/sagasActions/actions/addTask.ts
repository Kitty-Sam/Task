import { ADD_TASK } from '~store/sagasActions/types';

export interface AddTaskPayload {
    taskId: string;
    chapter: string;
    description: string;
    title: string;
    time: { from: string; till: string };
    isDone: boolean;
    isImportant: boolean;
    extraInfo: string;
}

export const addTaskAction = (payload: AddTaskPayload) => ({
    type: ADD_TASK,
    payload,
});

export type AddTask = {
    type: typeof ADD_TASK;
    payload: AddTaskPayload;
};
