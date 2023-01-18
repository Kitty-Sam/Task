import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put } from '@redux-saga/core/effects';

import { fetchTasksAC } from '~store/actions/tasksAC';
import { FetchTasksActionType } from '~store/sagasActions/fetchTasks';
import { database } from '~utils/getDataBaseURL';

import { TaskType } from '../reducers/tasksReducer';

export function* fetchTasksWorker({ payload }: FetchTasksActionType) {
    const { deviceId } = payload;
    try {
        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/${deviceId}/tasks`);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

        if (snapshot.val()) {
            const tasksFB: TaskType[] = Object.values(snapshot.val());
            yield put(fetchTasksAC(tasksFB));
        }
    } catch (error: any) {
        console.warn(error);
    }
}
