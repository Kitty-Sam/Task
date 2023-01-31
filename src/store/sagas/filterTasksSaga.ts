import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { Alert } from 'react-native';
import { put, select } from 'redux-saga/effects';

import { toggleAppStatus } from '~store/actions/appAC';
import { fetchTasksAC } from '~store/actions/tasksAC';
import { RequestStatus } from '~store/reducers/appReducer';
import { FilterTasksActionType } from '~store/sagasActions/filterTasks';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';
import { setFilteredTasks } from '~utils/getProperTime';

import { TaskType } from '../reducers/tasksReducer';

export function* filterTasksWorker({ payload }: FilterTasksActionType) {
    const { searchValue, chapter, period } = payload;
    const resultedDeviceId: string = yield select(getDeviceId);
    try {
        if (searchValue && period) {
            yield put(toggleAppStatus(RequestStatus.LOADING));
            const reference: FirebaseDatabaseTypes.Reference = yield database
                .ref(`/${resultedDeviceId}/tasks`)
                .orderByChild('chapter')
                .equalTo(chapter!);
            const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');
            if (snapshot.val()) {
                yield put(toggleAppStatus(RequestStatus.SUCCEEDED));
                const tasksFB: TaskType[] = Object.values(snapshot.val());
                const filteredTasksBySearch = tasksFB.filter((task) => task.title.includes(searchValue));
                const filteredTasksByTime = filteredTasksBySearch.filter((task) => task.title.includes(searchValue));
                const filteredTasksByTimeAndSearch = setFilteredTasks(period, filteredTasksByTime);
                yield put(fetchTasksAC(filteredTasksByTimeAndSearch));
                return;
            }
        }
        if (searchValue) {
            yield put(toggleAppStatus(RequestStatus.LOADING));
            const reference: FirebaseDatabaseTypes.Reference = yield database
                .ref(`/${resultedDeviceId}/tasks`)
                .orderByChild('chapter')
                .equalTo(chapter!);
            const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');
            if (snapshot.val()) {
                yield put(toggleAppStatus(RequestStatus.SUCCEEDED));
                const tasksFB: TaskType[] = Object.values(snapshot.val());
                const filteredTasksBySearch = tasksFB.filter((task) => task.title.includes(searchValue));
                yield put(fetchTasksAC(filteredTasksBySearch));
                return;
            }
        }
        if (period) {
            yield put(toggleAppStatus(RequestStatus.LOADING));
            const reference: FirebaseDatabaseTypes.Reference = yield database
                .ref(`/${resultedDeviceId}/tasks`)
                .orderByChild('chapter')
                .equalTo(chapter!);
            const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');
            if (snapshot.val()) {
                yield put(toggleAppStatus(RequestStatus.SUCCEEDED));
                const tasksFB: TaskType[] = Object.values(snapshot.val());
                const filteredTasksByTime = setFilteredTasks(period, tasksFB);
                yield put(fetchTasksAC(filteredTasksByTime));
                return;
            }
        }
        yield put(toggleAppStatus(RequestStatus.LOADING));
        const reference: FirebaseDatabaseTypes.Reference = yield database
            .ref(`/${resultedDeviceId}/tasks`)
            .orderByChild('chapter')
            .equalTo(chapter!);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');
        if (snapshot.val()) {
            yield put(toggleAppStatus(RequestStatus.SUCCEEDED));
            const tasksFB: TaskType[] = Object.values(snapshot.val());
            yield put(fetchTasksAC(tasksFB));
        } else {
            yield put(toggleAppStatus(RequestStatus.FAILED));
            yield put(fetchTasksAC([]));
            Alert.alert('Match is not found');
        }
    } catch (error: any) {
        console.warn(error);
    }
}
