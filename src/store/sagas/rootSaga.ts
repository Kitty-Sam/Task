import { takeLatest } from 'redux-saga/effects';

import { addTaskWorker } from '~store/sagas/addTaskSaga';
import { fetchTasksWorker } from '~store/sagas/fetchTasksSaga';
import { getDataFromStorageWorker } from '~store/sagas/getDataFromStorageSaga';
import { getDeviceIdWorker } from '~store/sagas/getDeviceIdSaga';
import { removeTaskWorker } from '~store/sagas/removeTaskSaga';
import { saveDataIntoStorageWorker } from '~store/sagas/saveDataIntoStorageSaga';
import {
    ADD_TASK,
    FETCH_TASKS,
    GET_DATA_FROM_STORAGE,
    GET_DEVICE_ID,
    REMOVE_TASK,
    SAVE_DATA_INTO_STORAGE,
} from '~store/sagasActionsType';

export function* watchClickSaga() {
    yield takeLatest(FETCH_TASKS, fetchTasksWorker);
    yield takeLatest(GET_DEVICE_ID, getDeviceIdWorker);
    yield takeLatest(SAVE_DATA_INTO_STORAGE, saveDataIntoStorageWorker);
    yield takeLatest(GET_DATA_FROM_STORAGE, getDataFromStorageWorker);
    yield takeLatest(ADD_TASK, addTaskWorker);
    yield takeLatest(REMOVE_TASK, removeTaskWorker);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
