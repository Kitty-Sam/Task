import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put, select } from 'redux-saga/effects';

import { editTaskAC } from '~store/actions/tasksAC';
import { TaskType } from '~store/reducers/tasksReducer';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* editTaskWorker({ payload }: any) {
    const { taskId, title, description, extraInfo } = payload;
    try {
        const deviceId: string = yield select(getDeviceId);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield database.ref(`/${deviceId}/tasks`).once('value');

        if (snapshot.val()) {
            const tasksFB: TaskType[] = Object.values(snapshot.val());
            const properTask = tasksFB.find((task: TaskType) => task.taskId === taskId);

            if (properTask) {
                database.ref(`/${deviceId}/tasks/${taskId}`).update({
                    ...payload,
                });
            }
            yield put(editTaskAC({ taskId, title, description, extraInfo }));
        }
    } catch (e) {
        console.log(e);
    }
}
