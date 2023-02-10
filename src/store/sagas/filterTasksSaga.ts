import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put, select } from 'redux-saga/effects';

import { fetchCurrentTasksAC, toggleAppStatus } from '~store/actions/actions';
import { RequestStatus } from '~store/reducers/appReducer';
import { ITask } from '~store/reducers/types';
import { FilterTasks } from '~store/sagasActions/actions/filterTasks';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';
import { setFilteredTasks } from '~utils/getProperTime';

export function* filterTasksWorkerNew({ payload }: FilterTasks) {
    const { searchValue, chapter, period } = payload;
    const resultedDeviceId: string = yield select(getDeviceId);
    try {
        yield put(toggleAppStatus({ status: RequestStatus.LOADING }));
        const reference: FirebaseDatabaseTypes.Reference = yield database
            .ref(`/${resultedDeviceId}/tasks`)
            .orderByChild('chapter')
            .equalTo(chapter!);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');
        if (snapshot.val() && searchValue && period) {
            yield put(toggleAppStatus({ status: RequestStatus.SUCCEEDED }));
            const tasksFB: ITask[] = Object.values(snapshot.val());
            const filteredTasksBySearch = tasksFB.filter((task) => task.title.includes(searchValue));
            const filteredTasksByTime = filteredTasksBySearch.filter((task) => task.title.includes(searchValue));
            const filteredTasksByTimeAndSearch = setFilteredTasks(period, filteredTasksByTime);
            yield put(fetchCurrentTasksAC({ tasks: filteredTasksByTimeAndSearch }));
            return;
        }
        if (snapshot.val() && searchValue) {
            yield put(toggleAppStatus({ status: RequestStatus.SUCCEEDED }));
            const tasksFB: ITask[] = Object.values(snapshot.val());
            const filteredTasksBySearch = tasksFB.filter((task) => task.title.includes(searchValue));
            yield put(fetchCurrentTasksAC({ tasks: filteredTasksBySearch }));
            return;
        }
        if (snapshot.val() && period) {
            yield put(toggleAppStatus({ status: RequestStatus.SUCCEEDED }));
            const tasksFB: ITask[] = Object.values(snapshot.val());
            const filteredTasksByTime = setFilteredTasks(period, tasksFB);
            yield put(fetchCurrentTasksAC({ tasks: filteredTasksByTime }));
            return;
        }
        if (snapshot.val()) {
            yield put(toggleAppStatus({ status: RequestStatus.SUCCEEDED }));
            const tasksFB: ITask[] = Object.values(snapshot.val());
            yield put(fetchCurrentTasksAC({ tasks: tasksFB }));
        } else {
            yield put(toggleAppStatus({ status: RequestStatus.FAILED }));
            yield put(fetchCurrentTasksAC({ tasks: [] }));
        }
    } catch (error: any) {
        console.warn(error);
    }
}
