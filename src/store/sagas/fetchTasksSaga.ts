import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put, select } from 'redux-saga/effects';

import { fetchTasksAC, toggleAppStatus } from '~store/actions/actions';
import { RequestStatus } from '~store/reducers/appReducer';
import { ITask } from '~store/reducers/types';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* fetchTasksWorker() {
    try {
        yield put(toggleAppStatus({ status: RequestStatus.LOADING }));
        const resultedDeviceId: string = yield select(getDeviceId);
        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/${resultedDeviceId}/tasks`);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

        if (snapshot.val()) {
            const tasksFB: ITask[] = Object.values(snapshot.val());
            yield put(fetchTasksAC({ tasks: tasksFB }));
            yield put(toggleAppStatus({ status: RequestStatus.SUCCEEDED }));
            return;
        }
        yield put(fetchTasksAC({ tasks: [] }));
        yield put(toggleAppStatus({ status: RequestStatus.FAILED }));
    } catch (error: any) {
        console.warn(error);
        yield put(fetchTasksAC({ tasks: [] }));
        yield put(toggleAppStatus({ status: RequestStatus.FAILED }));
    }
}
