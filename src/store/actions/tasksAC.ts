import { TaskType } from '../reducers/tasksReducer';

export enum TasksActions {
    ADD_TASK = 'add_task',
    REMOVE_TASK = 'remove_task',
    FETCH_TASKS = 'fetch_tasks',
}

export type RemovePayloadType = Omit<TaskType, 'title' | 'description' | 'time' | 'chapter'>;

export const addTaskAC: AddTaskActionType = (payload: TaskType) => ({
    type: TasksActions.ADD_TASK,
    payload,
});

export type AddTaskActionType = (payload: TaskType) => {
    payload: TaskType;
    type: TasksActions.ADD_TASK;
};

export const removeTaskAC: RemoveTaskActionType = (payload: RemovePayloadType) => ({
    type: TasksActions.REMOVE_TASK,
    payload,
});

export type RemoveTaskActionType = (payload: RemovePayloadType) => {
    payload: RemovePayloadType;
    type: TasksActions.REMOVE_TASK;
};

export const fetchTasksAC: FetchTasksActionType = (payload: TaskType[]) => ({
    type: TasksActions.FETCH_TASKS,
    payload,
});

export type FetchTasksActionType = (payload: TaskType[]) => {
    payload: TaskType[];
    type: TasksActions.FETCH_TASKS;
};
