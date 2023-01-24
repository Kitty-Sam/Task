import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put, select } from 'redux-saga/effects';

import { toggleIsDoneTaskAC, toggleIsImportantTaskAC } from '~store/actions/tasksAC';
import { TaskType } from '~store/reducers/tasksReducer';
import { ToggleIsDoneTaskActionType, ToggleIsImportantTaskActionType } from '~store/sagasActions/toggleIsDoneTask';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* toggleIsDoneTaskWorker({ payload }: ToggleIsDoneTaskActionType) {
    const { taskId, isDone } = payload;

    try {
        const deviceId: string = yield select(getDeviceId);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield database.ref(`/${deviceId}/tasks`).once('value');

        if (snapshot.val()) {
            const tasksFB: TaskType[] = Object.values(snapshot.val());
            tasksFB.forEach((task: TaskType) =>
                database.ref(`/${deviceId}/tasks/${taskId}`).update({
                    ...task,
                    isDone: !isDone,
                }),
            );
        }
        yield put(toggleIsDoneTaskAC(taskId));
    } catch (e) {
        console.log(e);
    }
}

export function* toggleIsImportantTaskWorker({ payload }: ToggleIsImportantTaskActionType) {
    const { taskId, isImportant } = payload;

    try {
        const deviceId: string = yield select(getDeviceId);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield database.ref(`/${deviceId}/tasks`).once('value');

        if (snapshot.val()) {
            const tasksFB: TaskType[] = Object.values(snapshot.val());
            tasksFB.forEach((task: TaskType) =>
                database.ref(`/${deviceId}/tasks/${taskId}`).update({
                    ...task,
                    isImportant: !isImportant,
                }),
            );
        }
        yield put(toggleIsImportantTaskAC(taskId));
    } catch (e) {
        console.log(e);
    }
}
