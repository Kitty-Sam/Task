import { put, select } from 'redux-saga/effects';

import { removeTaskAC } from '~store/actions/actions';
import { RemoveTask } from '~store/sagasActions/actions/removeTask';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* removeTaskWorker({ payload }: RemoveTask) {
    const { taskId } = payload;

    try {
        const resultedDeviceId: string = yield select(getDeviceId);
        yield database.ref(`/${resultedDeviceId}/`).child('tasks').child(taskId).remove();
        yield put(removeTaskAC({ id: taskId }));
    } catch (error: any) {
        console.warn(error);
    }
}
