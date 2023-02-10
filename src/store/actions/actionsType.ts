//app actions
export enum AppActions {
    APP_SET_ERROR = 'app_set_error',
    APP_SET_STATUS = 'app_set_status',
    APP_SET_DEVICE_ID = 'app_set_device_id',
}

//categories actions
export enum CategoriesActions {
    ADD_CATEGORY = 'add_category',
    FETCH_CATEGORIES = 'fetch_categories',
}

//tasks actions
export enum TasksActions {
    ADD_TASK = 'add_task',
    REMOVE_TASK = 'remove_task',
    FETCH_TASKS = 'fetch_tasks',
    FETCH_CURRENT_TASKS = 'fetch_current_tasks',
    TOGGLE_IS_DONE = 'toggle_id_done',
    TOGGLE_IS_IMPORTANT = 'toggle_is_important',
    EDIT_TASK = 'edit_task',
}
