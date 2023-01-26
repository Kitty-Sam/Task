import { takeLatest } from 'redux-saga/effects';

import { addTaskWorker } from '~store/sagas/addTaskSaga';
import { editTaskWorker } from '~store/sagas/editTaskSaga';
import { fetchTasksWorker } from '~store/sagas/fetchTasksSaga';
import { getDataFromStorageWorker } from '~store/sagas/getDataFromStorageSaga';
import { getDeviceIdWorker } from '~store/sagas/getDeviceIdSaga';
import { removeTaskWorker } from '~store/sagas/removeTaskSaga';
import { saveDataIntoStorageWorker } from '~store/sagas/saveDataIntoStorageSaga';
import { toggleIsDoneTaskWorker, toggleIsImportantTaskWorker } from '~store/sagas/toggleIsDoneTaskSaga';
import {
    ADD_TASK,
    EDIT_TASK,
    FETCH_TASKS,
    GET_DATA_FROM_STORAGE,
    GET_DEVICE_ID,
    REMOVE_TASK,
    SAVE_DATA_INTO_STORAGE,
    TOGGLE_IS_DONE,
    TOGGLE_IS_IMPORTANT,
} from '~store/sagasActionsType';

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
}

export default function* rootSaga() {
    yield watchClickSaga();
}
