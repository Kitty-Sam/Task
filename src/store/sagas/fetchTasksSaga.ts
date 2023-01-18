import AsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put } from 'redux-saga/effects';

import { fetchTasksAC } from '~store/actions/tasksAC';
import { database } from '~utils/getDataBaseURL';

import { TaskType } from '../reducers/tasksReducer';

export function* fetchTasksWorker() {
    try {
        const savedDeviceId: string = yield AsyncStorage.getItem('deviceID');
        const resultedDeviceId: string = yield JSON.parse(savedDeviceId);
        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/${resultedDeviceId}/tasks`);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

        if (snapshot.val()) {
            const tasksFB: TaskType[] = Object.values(snapshot.val());
            yield put(fetchTasksAC(tasksFB));
        }
    } catch (error: any) {
        console.warn(error);
    }
}
