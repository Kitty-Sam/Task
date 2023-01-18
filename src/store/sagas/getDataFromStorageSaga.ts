import AsyncStorage from '@react-native-async-storage/async-storage';
import { put } from '@redux-saga/core/effects';

import { saveDeviceID } from '~store/actions/appAC';
import { fetchTasksAC } from '~store/actions/tasksAC';
import { TaskType } from '~store/reducers/tasksReducer';

export function* getDataFromStorageWorker() {
    try {
        const savedDeviceId: string = yield AsyncStorage.getItem('deviceID');
        const savedTasks: string = yield AsyncStorage.getItem('tasks');
        if (savedDeviceId) {
            const resultedDeviceId: string = yield JSON.parse(savedDeviceId);
            yield put(saveDeviceID(resultedDeviceId));
        }
        if (savedTasks) {
            const resultedTasks: TaskType[] = yield JSON.parse(savedTasks);
            yield put(fetchTasksAC(resultedTasks));
        }
    } catch (error) {
        console.log(error);
    }
}
