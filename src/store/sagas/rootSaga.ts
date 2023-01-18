import { takeLatest } from '@redux-saga/core/effects';

import { fetchTasksWorker } from '~store/sagas/fetchTasksSaga';
import { getDataFromStorageWorker } from '~store/sagas/getDataFromStorageSaga';
import { getDeviceIdWorker } from '~store/sagas/getDeviceIdSaga';
import { saveDataIntoStorageWorker } from '~store/sagas/saveDataIntoStorageSaga';
import { FETCH_TASKS, GET_DATA_FROM_STORAGE, GET_DEVICE_ID, SAVE_DATA_INTO_STORAGE } from '~store/sagasActionsType';

export function* watchClickSaga() {
    yield takeLatest(FETCH_TASKS, fetchTasksWorker);
    yield takeLatest(GET_DEVICE_ID, getDeviceIdWorker);
    yield takeLatest(SAVE_DATA_INTO_STORAGE, saveDataIntoStorageWorker);
    yield takeLatest(GET_DATA_FROM_STORAGE, getDataFromStorageWorker);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
