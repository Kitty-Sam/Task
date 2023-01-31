import { TaskType } from '../reducers/tasksReducer';

export enum TasksActions {
    ADD_TASK = 'add_task',
    REMOVE_TASK = 'remove_task',
    FETCH_TASKS = 'fetch_tasks',
    TOGGLE_IS_DONE = 'toggle_id_done',
    TOGGLE_IS_IMPORTANT = 'toggle_is_important',
    EDIT_TASK = 'edit_task',
}

export const toggleIsDoneTaskAC: ToggleIsDoneTaskActionType = (payload: string) => ({
    type: TasksActions.TOGGLE_IS_DONE,
    payload,
});

export type ToggleIsDoneTaskActionType = (payload: string) => {
    type: TasksActions.TOGGLE_IS_DONE;
    payload: string;
};

export const toggleIsImportantTaskAC: ToggleIsImportantTaskActionType = (payload: string) => ({
    type: TasksActions.TOGGLE_IS_IMPORTANT,
    payload,
});

export type ToggleIsImportantTaskActionType = (payload: string) => {
    type: TasksActions.TOGGLE_IS_IMPORTANT;
    payload: string;
};

export const addTaskAC: AddTaskActionType = (payload: TaskType) => ({
    type: TasksActions.ADD_TASK,
    payload,
});

export type AddTaskActionType = (payload: TaskType) => {
    payload: TaskType;
    type: TasksActions.ADD_TASK;
};

export const removeTaskAC: RemoveTaskActionType = (payload: string) => ({
    type: TasksActions.REMOVE_TASK,
    payload,
});

export type RemoveTaskActionType = (payload: string) => {
    payload: string;
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

export const editTaskAC: EditTaskActionType = (payload: {
    taskId: string;
    title: string;
    description: string;
    extraInfo: string;
}) => ({
    type: TasksActions.EDIT_TASK,
    payload,
});

export type EditTaskActionType = (payload: {
    taskId: string;
    title: string;
    description: string;
    extraInfo: string;
}) => {
    payload: {
        taskId: string;
        title: string;
        description: string;
        extraInfo: string;
    };
    type: TasksActions.EDIT_TASK;
};
