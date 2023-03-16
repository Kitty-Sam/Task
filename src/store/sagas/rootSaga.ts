import { takeLatest } from 'redux-saga/effects';

import { addCategoryWorker } from '~store/sagas/addCategorySaga';
import { addTaskWorker } from '~store/sagas/addTaskSaga';
import { editTaskWorker } from '~store/sagas/editTaskSaga';
import { fetchCategoriesWorker } from '~store/sagas/fetchCategoriesSaga';
import { fetchTasksWorker } from '~store/sagas/fetchTasksSaga';
import { filterTasksWorkerNew } from '~store/sagas/filterTasksSaga';
import { getDataFromStorageWorker } from '~store/sagas/getDataFromStorageSaga';
import { getDeviceIdWorker } from '~store/sagas/getDeviceIdSaga';
import { removeTaskWorker } from '~store/sagas/removeTaskSaga';
import { saveDataIntoStorageWorker } from '~store/sagas/saveDataIntoStorageSaga';
import { toggleIsDoneTaskWorker, toggleIsImportantTaskWorker } from '~store/sagas/toggleIsDoneTaskSaga';
import {
    ADD_CATEGORY,
    ADD_TASK,
    EDIT_TASK,
    FETCH_CATEGORIES,
    FETCH_TASKS,
    FILTER_TASKS,
    GET_DATA_FROM_STORAGE,
    GET_DEVICE_ID,
    REMOVE_TASK,
    SAVE_DATA_INTO_STORAGE,
    TOGGLE_IS_DONE,
    TOGGLE_IS_IMPORTANT,
} from '~store/sagasActions/types';

export function* watchClickSaga() {
    yield takeLatest(FETCH_TASKS, fetchTasksWorker);
    yield takeLatest(GET_DEVICE_ID, getDeviceIdWorker);
    yield takeLatest(SAVE_DATA_INTO_STORAGE, saveDataIntoStorageWorker);
    yield takeLatest(GET_DATA_FROM_STORAGE, getDataFromStorageWorker);
    yield takeLatest(ADD_TASK, addTaskWorker);
    yield takeLatest(REMOVE_TASK, removeTaskWorker);
    yield takeLatest(TOGGLE_IS_DONE, toggleIsDoneTaskWorker);
    yield takeLatest(TOGGLE_IS_IMPORTANT, toggleIsImportantTaskWorker);
    yield takeLatest(EDIT_TASK, editTaskWorker);
    yield takeLatest(FETCH_CATEGORIES, fetchCategoriesWorker);
    yield takeLatest(ADD_CATEGORY, addCategoryWorker);
    yield takeLatest(FILTER_TASKS, filterTasksWorkerNew);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
