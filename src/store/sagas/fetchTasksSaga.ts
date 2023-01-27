import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put, select } from 'redux-saga/effects';

import { toggleAppStatus } from '~store/actions/appAC';
import { fetchTasksAC } from '~store/actions/tasksAC';
import { RequestStatus } from '~store/reducers/appReducer';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

import { TaskType } from '../reducers/tasksReducer';

export function* fetchTasksWorker() {
    yield put(toggleAppStatus(RequestStatus.LOADING));
    try {
        const resultedDeviceId: string = yield select(getDeviceId);
        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/${resultedDeviceId}/tasks`);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

        if (snapshot.val()) {
            const tasksFB: TaskType[] = Object.values(snapshot.val());
            yield put(fetchTasksAC(tasksFB));
            yield put(toggleAppStatus(RequestStatus.SUCCEEDED));
        }
    } catch (error: any) {
        console.warn(error);
        yield put(toggleAppStatus(RequestStatus.FAILED));
    }
}
