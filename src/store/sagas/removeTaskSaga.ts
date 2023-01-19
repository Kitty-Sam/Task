import { put, select } from 'redux-saga/effects';

import { removeTaskAC } from '~store/actions/tasksAC';
import { RemoveTaskActionType } from '~store/sagasActions/removeTask';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* removeTaskWorker({ payload }: RemoveTaskActionType) {
    const { taskId } = payload;

    try {
        const resultedDeviceId: string = yield select(getDeviceId);
        yield database.ref(`/${resultedDeviceId}/`).child('tasks').child(taskId).remove();
        yield put(removeTaskAC(taskId));
    } catch (error: any) {
        console.warn(error);
    }
}
