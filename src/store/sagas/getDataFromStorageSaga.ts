import AsyncStorage from '@react-native-async-storage/async-storage';
import { put } from 'redux-saga/effects';

import { fetchTasksAC } from '~store/actions/tasksAC';
import { TaskType } from '~store/reducers/tasksReducer';

export function* getDataFromStorageWorker() {
    try {
        const savedTasks: string = yield AsyncStorage.getItem('tasks');
        if (savedTasks) {
            const resultedTasks: TaskType[] = yield JSON.parse(savedTasks);
            if (resultedTasks.length) {
                yield put(fetchTasksAC(resultedTasks));
            }
        }
    } catch (error) {
        console.log(error);
    }
}
