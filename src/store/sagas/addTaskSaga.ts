import { put, select } from 'redux-saga/effects';

import { addTaskAC } from '~store/actions/tasksAC';
import { AddTaskActionType } from '~store/sagasActions/addTask';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* addTaskWorker({ payload }: AddTaskActionType) {
    const { taskId, chapter, description, title, time } = payload;

    try {
        const resultedDeviceId: string = yield select(getDeviceId);
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
