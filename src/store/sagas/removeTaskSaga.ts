import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put } from 'redux-saga/effects';

import { removeTaskAC } from '~store/actions/tasksAC';
import { fetchTasksWorker } from '~store/sagas/fetchTasksSaga';
import { RemoveTaskActionType } from '~store/sagasActions/removeTask';
import { database } from '~utils/getDataBaseURL';

export function* removeTaskWorker({ payload }: RemoveTaskActionType) {
    const { taskId } = payload;

    try {
        const savedDeviceId: string = yield AsyncStorage.getItem('deviceID');
        const resultedDeviceId: string = yield JSON.parse(savedDeviceId);
        yield database.ref(`/${resultedDeviceId}/`).child('tasks').child(taskId).remove();
        // yield put(removeTaskAC({ id: taskId }));
        yield call(fetchTasksWorker);
    } catch (error: any) {
        console.warn(error);
    }
}
