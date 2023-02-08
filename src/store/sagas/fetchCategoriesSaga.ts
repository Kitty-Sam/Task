import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { put, select } from 'redux-saga/effects';

import { fetchCategoriesAC, toggleAppStatus } from '~store/actions/actions';
import { RequestStatus } from '~store/reducers/appReducer';
import { ICategory } from '~store/reducers/types';
import { getDeviceId } from '~store/selectors/appSelector';
import { database } from '~utils/getDataBaseURL';

export function* fetchCategoriesWorker() {
    try {
        yield put(toggleAppStatus({ status: RequestStatus.LOADING }));
        const resultedDeviceId: string = yield select(getDeviceId);
        const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/${resultedDeviceId}/categories`);
        const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

        if (snapshot.val()) {
            const categoriesFB: ICategory[] = Object.values(snapshot.val());
            yield put(fetchCategoriesAC({ categories: categoriesFB }));
            yield put(toggleAppStatus({ status: RequestStatus.IDLE }));
            return;
        }
        yield put(fetchCategoriesAC({ categories: [] }));
    } catch (error: any) {
        yield put(fetchCategoriesAC({ categories: [] }));
        yield put(toggleAppStatus({ status: RequestStatus.FAILED }));
        console.warn(error);
    }
}
