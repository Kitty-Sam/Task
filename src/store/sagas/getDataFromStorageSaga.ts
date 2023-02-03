import AsyncStorage from '@react-native-async-storage/async-storage';
import { put } from 'redux-saga/effects';

import { fetchTasksAC } from '~store/actions/actions';
import { ITask } from '~store/reducers/types';

export function* getDataFromStorageWorker() {
    try {
        const savedTasks: string = yield AsyncStorage.getItem('tasks');
        if (savedTasks) {
            const resultedTasks: ITask[] = yield JSON.parse(savedTasks);
            if (resultedTasks.length) {
                yield put(fetchTasksAC({ tasks: resultedTasks }));
            }
        }
    } catch (error) {
        console.log(error);
    }
}
