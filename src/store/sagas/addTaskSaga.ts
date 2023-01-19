import AsyncStorage from '@react-native-async-storage/async-storage';
import { put } from 'redux-saga/effects';

import { addTaskAC } from '~store/actions/tasksAC';
import { AddTaskActionType } from '~store/sagasActions/addTask';
import { database } from '~utils/getDataBaseURL';

export function* addTaskWorker({ payload }: AddTaskActionType) {
    const { taskId, chapter, description, title, time } = payload;

    try {
        const savedDeviceId: string = yield AsyncStorage.getItem('deviceID');
        const resultedDeviceId: string = yield JSON.parse(savedDeviceId);
        yield database
            .ref(`/${resultedDeviceId}/`)
            .child('tasks')
            .child(taskId)
            .set({ chapter, title, description, taskId, time });
        yield put(addTaskAC({ chapter, title, description, taskId, time }));
    } catch (error: any) {
        console.warn(error);
    }
}
