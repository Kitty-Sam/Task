import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put, select } from 'redux-saga/effects';

import { toggleAppStatus } from '~store/actions/appAC';
import { fetchCategoriesAC } from '~store/actions/categoriesAC';
import { RequestStatus } from '~store/reducers/appReducer';
import { CategoryType } from '~store/reducers/categoriesReducer';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* fetchCategoriesWorker() {
    try {
        yield put(toggleAppStatus(RequestStatus.LOADING));
        const resultedDeviceId: string = yield select(getDeviceId);
        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/${resultedDeviceId}/categories`);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

        if (snapshot.val()) {
            const categoriesFB: CategoryType[] = Object.values(snapshot.val());
            yield put(fetchCategoriesAC(categoriesFB));
            yield put(toggleAppStatus(RequestStatus.IDLE));
            return;
        }
        yield put(fetchCategoriesAC([]));
    } catch (error: any) {
        yield put(fetchCategoriesAC([]));
        yield put(toggleAppStatus(RequestStatus.FAILED));
        console.warn(error);
    }
}
