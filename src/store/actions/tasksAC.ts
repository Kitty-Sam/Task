export enum TasksActions {
    ADD_TASK = 'add_task',
    REMOVE_TASK = 'remove_task',
    FETCH_TASKS = 'fetch_tasks',
}

export type PayloadType = {
    id: string;
    title: string;
    description: string;
    time: string;
};

export type RemovePayloadType = Omit<PayloadType, 'title' | 'description' | 'time'>;

export const addTaskAC: AddTaskActionType = (payload: PayloadType) => ({
    type: TasksActions.ADD_TASK,
    payload,
});

export type AddTaskActionType = (payload: PayloadType) => {
    payload: PayloadType;
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

export const fetchTasksAC: FetchTasksActionType = (payload: PayloadType[]) => ({
    type: TasksActions.FETCH_TASKS,
    payload,
});

export type FetchTasksActionType = (payload: PayloadType[]) => {
    payload: PayloadType[];
    type: TasksActions.FETCH_TASKS;
};
