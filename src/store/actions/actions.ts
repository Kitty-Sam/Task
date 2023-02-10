import { AppActions, CategoriesActions, TasksActions } from '~store/actions/actionsType';
import {
    AddCategory,
    AddCategoryPayload,
    AddTask,
    AddTaskPayload,
    EditTaskPayload,
    FetchCategories,
    FetchCategoriesPayload,
    FetchCurrentTasks,
    FetchTasks,
    FetchTasksPayload,
    RemoveTask,
    RemoveTaskPayload,
    SaveDeviceIdPayload,
    ToggleAppErrorPayload,
    ToggleAppStatusPayload,
    ToggleIsDoneTaskPayload,
    ToggleIsImportantTaskPayload,
} from '~store/reducers/types';

//app

export const saveDeviceID = (payload: SaveDeviceIdPayload) => ({
    type: AppActions.APP_SET_DEVICE_ID,
    payload,
});

export const toggleAppStatus = (payload: ToggleAppStatusPayload) => ({
    type: AppActions.APP_SET_STATUS,
    payload,
});

export const toggleAppErrorStatus = (payload: ToggleAppErrorPayload) => ({
    type: AppActions.APP_SET_ERROR,
    payload,
});

//categories
export const addCategoryAC = (payload: AddCategoryPayload): AddCategory => ({
    type: CategoriesActions.ADD_CATEGORY,
    payload,
});

export const fetchCategoriesAC = (payload: FetchCategoriesPayload): FetchCategories => ({
    type: CategoriesActions.FETCH_CATEGORIES,
    payload,
});

//tasks
export const addTaskAC = (payload: AddTaskPayload): AddTask => ({
    type: TasksActions.ADD_TASK,
    payload,
});

export const removeTaskAC = (payload: RemoveTaskPayload): RemoveTask => ({
    type: TasksActions.REMOVE_TASK,
    payload,
});

export const fetchTasksAC = (payload: FetchTasksPayload): FetchTasks => ({
    type: TasksActions.FETCH_TASKS,
    payload,
});
export const fetchCurrentTasksAC = (payload: FetchTasksPayload): FetchCurrentTasks => ({
    type: TasksActions.FETCH_CURRENT_TASKS,
    payload,
});

export const toggleIsDoneTaskAC = (payload: ToggleIsDoneTaskPayload) => ({
    type: TasksActions.TOGGLE_IS_DONE,
    payload,
});

export const toggleIsImportantTaskAC = (payload: ToggleIsImportantTaskPayload) => ({
    type: TasksActions.TOGGLE_IS_IMPORTANT,
    payload,
});

export const editTaskAC = (payload: EditTaskPayload) => ({
    type: TasksActions.EDIT_TASK,
    payload,
});
