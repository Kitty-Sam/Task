import { AppActions, CategoriesActions, TasksActions } from '~store/actions/actionsType';
import { RequestStatus } from '~store/reducers/appReducer';

export interface ICategory {
    catId: string;
    title: string;
    icon: string;
    backgroundColor: string;
}
//categories
export interface FetchCategoriesPayload {
    categories: ICategory[];
}

export interface AddCategoryPayload {
    category: ICategory;
}

export type FetchCategories = {
    type: typeof CategoriesActions.FETCH_CATEGORIES;
    payload: FetchCategoriesPayload;
};

export type AddCategory = {
    type: typeof CategoriesActions.ADD_CATEGORY;
    payload: AddCategoryPayload;
};

//App
export interface IApp {
    error: boolean;
    status: RequestStatus;
    deviceId: string;
}

export interface SaveDeviceIdPayload {
    id: string;
}

export interface ToggleAppStatusPayload {
    status: RequestStatus;
}

export interface ToggleAppErrorPayload {
    error: boolean;
}

export type SaveDeviceId = {
    type: typeof AppActions.APP_SET_DEVICE_ID;
    payload: SaveDeviceIdPayload;
};

export type ToggleAppStatus = {
    type: typeof AppActions.APP_SET_STATUS;
    payload: ToggleAppStatusPayload;
};

export type ToggleAppError = {
    type: typeof AppActions.APP_SET_ERROR;
    payload: ToggleAppErrorPayload;
};

//Task
export interface ITask {
    taskId: string;
    title: string;
    description: string;
    time: { from: string; till: string };
    chapter: string;
    isDone: boolean;
    isImportant: boolean;
    extraInfo: string;
}

//payloads types
export interface AddTaskPayload {
    task: ITask;
}

export interface RemoveTaskPayload {
    id: string;
}

export interface FetchTasksPayload {
    tasks: ITask[];
}

export interface ToggleIsDoneTaskPayload {
    id: string;
}
export interface ToggleIsImportantTaskPayload {
    id: string;
}
export interface EditTaskPayload {
    taskId: string;
    title: string;
    description: string;
    extraInfo: string;
}

// Actions creators types
export type AddTask = {
    type: typeof TasksActions.ADD_TASK;
    payload: AddTaskPayload;
};

export type RemoveTask = {
    type: typeof TasksActions.REMOVE_TASK;
    payload: RemoveTaskPayload;
};

export type FetchTasks = {
    type: typeof TasksActions.FETCH_TASKS;
    payload: FetchTasksPayload;
};
export type FetchCurrentTasks = {
    type: typeof TasksActions.FETCH_CURRENT_TASKS;
    payload: FetchTasksPayload;
};

export type ToggleIsImportant = {
    type: typeof TasksActions.TOGGLE_IS_IMPORTANT;
    payload: ToggleIsImportantTaskPayload;
};

export type ToggleIsDone = {
    type: typeof TasksActions.TOGGLE_IS_DONE;
    payload: ToggleIsDoneTaskPayload;
};

export type EditTask = {
    type: typeof TasksActions.EDIT_TASK;
    payload: EditTaskPayload;
};

export type ActionsType =
    | EditTask
    | FetchCategories
    | AddCategory
    | AddTask
    | RemoveTask
    | FetchTasks
    | ToggleIsDone
    | ToggleIsImportant
    | SaveDeviceId
    | ToggleAppError
    | ToggleAppStatus
    | FetchCurrentTasks;
