import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put, select } from 'redux-saga/effects';

import { toggleIsDoneTaskAC, toggleIsImportantTaskAC } from '~store/actions/actions';
import { ITask } from '~store/reducers/types';
import { ToggleIsDone, ToggleIsImportant } from '~store/sagasActions/actions/toggleIsDoneTask';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* toggleIsDoneTaskWorker({ payload }: ToggleIsDone) {
    const { taskId, isDone } = payload;

    try {
        const deviceId: string = yield select(getDeviceId);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield database.ref(`/${deviceId}/tasks`).once('value');

        if (snapshot.val()) {
            const tasksFB: ITask[] = Object.values(snapshot.val());
            const properTask = tasksFB.find((task: ITask) => task.taskId === taskId);

            if (properTask) {
                database.ref(`/${deviceId}/tasks/${taskId}`).update({
                    ...payload,
                    isDone: !isDone,
                });
            }
            yield put(toggleIsDoneTaskAC({ id: taskId }));
        }
    } catch (e) {
        console.log(e);
    }
}

export function* toggleIsImportantTaskWorker({ payload }: ToggleIsImportant) {
    const { taskId, isImportant } = payload;

    try {
        const deviceId: string = yield select(getDeviceId);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield database.ref(`/${deviceId}/tasks`).once('value');

        if (snapshot.val()) {
            const tasksFB: ITask[] = Object.values(snapshot.val());
            const properTask = tasksFB.find((task: ITask) => task.taskId === taskId);

            if (properTask) {
                database.ref(`/${deviceId}/tasks/${taskId}`).update({
                    ...payload,
                    isImportant: !isImportant,
                });
            }
            yield put(toggleIsImportantTaskAC({ id: taskId }));
        }
    } catch (e) {
        console.log(e);
    }
}
